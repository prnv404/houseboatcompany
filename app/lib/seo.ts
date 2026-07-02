// Central source of truth for SEO: site identity, absolute-URL helpers, and
// JSON-LD (structured data) builders. Keep every hard-coded brand/URL/geo fact
// here so pages stay declarative and nothing drifts out of sync.
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "./contact";

/**
 * Production origin, no trailing slash. Override per-environment with
 * NEXT_PUBLIC_SITE_URL (e.g. a preview deploy). Falls back to the live domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.houseboatcompany.in"
).replace(/\/$/, "");

export const SITE_NAME = "HouseBoat Company";
export const BRAND = "HouseBoat Company Alleppey";
export const LOCALE = "en_IN";

export const SITE_DESCRIPTION =
  "Cruise the Alleppey backwaters aboard handcrafted luxury houseboats. Private whole-boat charters and shared cruises through Kerala's palm-lined canals — authentic Kerala meals, air-conditioned cabins, and golden sunrises on Vembanad Lake.";

/** Business facts used across LocalBusiness / Organization structured data. */
export const BUSINESS = {
  legalName: "HouseBoat Company",
  // Alappuzha ("Alleppey"), Kerala — the boarding jetty area. Coordinates are
  // approximate to the Alleppey backwater jetty; refine to the exact dock.
  addressLocality: "Alappuzha (Alleppey)",
  addressRegion: "Kerala",
  postalCode: "688001",
  addressCountry: "IN",
  latitude: 9.4981,
  longitude: 76.3388,
  areaServed: ["Alappuzha", "Alleppey", "Kumarakom", "Kerala", "India"],
  priceRange: "₹₹",
  email: "info@houseboatcompany.in",
} as const;

/** Resolve a site-relative path to an absolute URL. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

const socialLinks: string[] = [
  `https://wa.me/${WHATSAPP_NUMBER}`,
  // Add verified profiles as they go live (Instagram, Facebook, Google Maps).
];

/**
 * TravelAgency is the most fitting schema.org type for a houseboat booking
 * operator (it also renders as a LocalBusiness). Emitted once, site-wide.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    image: absoluteUrl("/logo.jpeg"),
    logo: absoluteUrl("/logo.jpeg"),
    telephone: PHONE_NUMBER,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: socialLinks,
  };
}

/** WebSite node — enables the site-name treatment in Google results. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** BreadcrumbList for a detail page, rooted at the home page. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export interface ProductOfferInput {
  name: string;
  description: string;
  url: string;
  image: string[];
  /** Numeric INR amount, e.g. 8000. */
  price: number;
  /** Free-text unit shown in copy, e.g. "night" or "person". */
  unit?: string;
}

/**
 * Product + Offer for a bookable houseboat or experience. Priced in INR.
 * No aggregateRating is emitted here — ratings are only added when a real,
 * verifiable review count is available (see reviewSnippet).
 */
export function productJsonLd(input: ProductOfferInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: input.image.map((src) => absoluteUrl(src)),
    url: absoluteUrl(input.url),
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      price: input.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(input.url),
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

/** Parse "₹8,000" / "₹5,000" → 8000. Returns undefined if not parseable. */
export function parseInr(price: string): number | undefined {
  const digits = price.replace(/[^\d]/g, "");
  return digits ? Number(digits) : undefined;
}
