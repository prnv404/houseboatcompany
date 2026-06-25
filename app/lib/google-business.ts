// Server-side Google Business Profile client.
//
// Fetches reviews and photos for the configured location using a long-lived
// refresh token. Everything is wrapped so that any failure (missing config,
// not-yet-approved API access, network error) resolves to an empty result —
// callers fall back to static content so the site never breaks.
//
// Reviews/photos use the legacy My Business API v4, which requires approved
// access: https://developers.google.com/my-business/content/review-data
import "server-only";

export interface GoogleReview {
  id: string;
  author: string;
  photoUrl?: string;
  rating: number;
  text: string;
  time: string; // human-friendly, e.g. "3 weeks ago"
}

export interface GooglePhoto {
  src: string;
  alt: string;
}

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const V4_BASE = "https://mybusiness.googleapis.com/v4";
const REVALIDATE_SECONDS = 3600; // re-fetch hourly (Google ToS discourages long caching)

const STAR_TO_NUMBER: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

function config() {
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
    GOOGLE_BUSINESS_ACCOUNT_ID,
    GOOGLE_BUSINESS_LOCATION_ID,
  } = process.env;

  if (
    !GOOGLE_CLIENT_ID ||
    !GOOGLE_CLIENT_SECRET ||
    !GOOGLE_REFRESH_TOKEN ||
    !GOOGLE_BUSINESS_ACCOUNT_ID ||
    !GOOGLE_BUSINESS_LOCATION_ID
  ) {
    return null;
  }

  return {
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    refreshToken: GOOGLE_REFRESH_TOKEN,
    accountId: GOOGLE_BUSINESS_ACCOUNT_ID,
    locationId: GOOGLE_BUSINESS_LOCATION_ID,
  };
}

// Cache the short-lived access token in module memory to avoid re-minting it
// on every request.
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(cfg: NonNullable<ReturnType<typeof config>>): Promise<string | null> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: cfg.clientId,
      client_secret: cfg.clientSecret,
      refresh_token: cfg.refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string; expires_in?: number };
  if (!json.access_token) return null;

  cachedToken = {
    value: json.access_token,
    expiresAt: Date.now() + (json.expires_in ?? 3600) * 1000,
  };
  return cachedToken.value;
}

function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) {
    const w = Math.floor(days / 7);
    return `${w} week${w > 1 ? "s" : ""} ago`;
  }
  if (days < 365) {
    const m = Math.floor(days / 30);
    return `${m} month${m > 1 ? "s" : ""} ago`;
  }
  const y = Math.floor(days / 365);
  return `${y} year${y > 1 ? "s" : ""} ago`;
}

interface V4Review {
  reviewId: string;
  reviewer?: { displayName?: string; profilePhotoUrl?: string };
  starRating?: string;
  comment?: string;
  createTime?: string;
}

/** Fetch reviews for the configured location. Returns [] on any problem. */
export async function getGoogleReviews(limit = 9): Promise<GoogleReview[]> {
  const cfg = config();
  if (!cfg) return [];

  try {
    const token = await getAccessToken(cfg);
    if (!token) return [];

    const url = `${V4_BASE}/accounts/${cfg.accountId}/locations/${cfg.locationId}/reviews?pageSize=${limit}&orderBy=updateTime%20desc`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];

    const json = (await res.json()) as { reviews?: V4Review[] };
    return (json.reviews ?? [])
      .filter((r) => r.comment && r.comment.trim().length > 0)
      .slice(0, limit)
      .map((r) => ({
        id: r.reviewId,
        author: r.reviewer?.displayName ?? "Google guest",
        photoUrl: r.reviewer?.profilePhotoUrl,
        rating: STAR_TO_NUMBER[r.starRating ?? "FIVE"] ?? 5,
        text: r.comment ?? "",
        time: r.createTime ? relativeTime(r.createTime) : "",
      }));
  } catch {
    return [];
  }
}

interface V4MediaItem {
  name: string;
  mediaFormat?: string;
  googleUrl?: string;
  sourceUrl?: string;
  thumbnailUrl?: string;
}

/** Fetch location photos. Returns [] on any problem. */
export async function getGooglePhotos(limit = 18): Promise<GooglePhoto[]> {
  const cfg = config();
  if (!cfg) return [];

  try {
    const token = await getAccessToken(cfg);
    if (!token) return [];

    const url = `${V4_BASE}/accounts/${cfg.accountId}/locations/${cfg.locationId}/media?pageSize=${limit}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];

    const json = (await res.json()) as { mediaItems?: V4MediaItem[] };
    return (json.mediaItems ?? [])
      .filter((m) => m.mediaFormat === "PHOTO" && (m.googleUrl || m.sourceUrl))
      .slice(0, limit)
      .map((m, i) => ({
        src: (m.googleUrl || m.sourceUrl) as string,
        alt: `Houseboat photo ${i + 1}`,
      }));
  } catch {
    return [];
  }
}
