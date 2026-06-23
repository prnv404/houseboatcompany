// Detail-page content for private (whole-boat) houseboats.
// The boat list (beds, guests, price, images) lives in `home.ts`; this module
// layers the richer copy a detail page needs on top of each entry.
import { privateBoats, type PrivateBoat } from "./home";

/** URL slug for a boat, e.g. 2 -> "2-bedroom". */
export function houseboatSlug(beds: number): string {
  return `${beds}-bedroom`;
}

// Shared across every private houseboat — written once, applied to all sizes.
export const PRIVATE_HIGHLIGHTS: string[] = [
  "The entire houseboat, exclusively for your group",
  "Air-conditioned bedrooms, each with an attached bathroom",
  "Open-air upper sundeck with panoramic backwater views",
  "Personal chef cooking authentic Kerala meals onboard",
  "Spacious living & dining lounge to gather in",
  "Cruise through Punnamada & Vembanad Lake",
];

export const PRIVATE_INCLUDED: string[] = [
  "Full Kerala lunch, evening snacks, dinner & breakfast",
  "Welcome drinks on arrival",
  "Air-conditioned bedrooms (9 PM – 6 AM)",
  "Personal chef & experienced crew",
  "Private cabins with attached bathrooms",
  "Living lounge, dining area & open sundeck",
];

export const PRIVATE_POLICIES: string[] = [
  "Check-in 12:00 PM – 2:00 PM · Check-out 9:00 AM the next day.",
  "AC runs 9 PM – 6 AM in bedrooms. Full-time AC available on request for an extra charge.",
  "Children below 5 years stay complimentary when sharing with parents.",
  "After sunset the boat anchors near a village and stays moored overnight.",
  "Price is per night for the whole boat. Custom routes and extra nights on request.",
  "Payment is made at check-in — nothing to pay online now.",
];

export interface HouseboatFact {
  label: string;
  value: string;
}

export interface HouseboatDetail extends PrivateBoat {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  bathrooms: number;
  facts: HouseboatFact[];
  layout: string[];
}

function buildDetail(boat: PrivateBoat): HouseboatDetail {
  const { beds, guests } = boat;
  const bedWord = beds === 1 ? "bedroom" : "bedrooms";

  return {
    ...boat,
    slug: houseboatSlug(beds),
    name: `${beds} Bedroom Private Houseboat`,
    tagline: "The whole boat — just for your group",
    description: `Charter the entire ${beds}-bedroom houseboat for your group of ${guests} guests. Total privacy across ${beds} air-conditioned ${bedWord}, each with its own attached bathroom, plus a living lounge, dining area, and open sundeck — all exclusively yours as you cruise the Alleppey backwaters.`,
    longDescription: `Booking the whole boat means the lounge, the dining table, the sundeck, and the kitchen are yours alone — perfect for families, friends, and celebrations. Check in around midday at the Alleppey jetty, settle into your ${bedWord}, and cruise through Punnamada Lake and the village canals as a personal chef prepares authentic Kerala meals onboard. After sunset the boat moors near a quiet village for the night, and you wake to a misty sunrise cruise back to Alleppey. A ${beds}-bedroom boat comfortably hosts ${guests} guests with room to spread out.`,
    bathrooms: beds,
    layout: [
      `${beds} air-conditioned ${bedWord}`,
      `${beds} attached ${beds === 1 ? "bathroom" : "bathrooms"}`,
      "Living & dining lounge",
      "Open-air sundeck",
      "Onboard kitchen with personal chef",
    ],
    facts: [
      { label: "Bedrooms", value: String(beds) },
      { label: "Guests", value: guests },
      { label: "Bathrooms", value: String(beds) },
      { label: "Rating", value: "5.0 / 5" },
    ],
  };
}

export function getHouseboatDetail(slug: string): HouseboatDetail | null {
  const boat = privateBoats.find((b) => houseboatSlug(b.beds) === slug);
  return boat ? buildDetail(boat) : null;
}

export const houseboatSlugs: string[] = privateBoats.map((b) => houseboatSlug(b.beds));
