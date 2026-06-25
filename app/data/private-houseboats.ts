// Detail-page content for private (whole-boat) houseboats.
// The boat list (beds, guests, price, images) lives in `home.ts`; this module
// layers the richer copy a detail page needs on top of each entry.
import { privateBoats, type PrivateBoat } from "./home";

/** URL slug for a boat, e.g. 2 -> "2-bedroom". */
export function houseboatSlug(beds: number): string {
  return `${beds}-bedroom`;
}

export const PRIVATE_HIGHLIGHTS: string[] = [
  "The entire houseboat, exclusively for your group",
  "Air-conditioned bedrooms, each with an attached bathroom",
  "Open-air upper sundeck with panoramic backwater views",
  "Personal chef cooking authentic Kerala meals onboard",
  "Spacious living & dining lounge to gather in",
  "Cruise through Punnamada & Vembanad Lake",
];

export const PRIVATE_INCLUDED: string[] = [
  "Welcome drinks on arrival",
  "Full Kerala lunch, evening snacks, dinner & breakfast",
  "Air-conditioned bedrooms (9 PM – 6 AM)",
  "Personal chef & experienced 3-member crew",
  "Private cabins with attached bathrooms",
  "Living lounge, dining area & open sundeck",
  "Music system onboard",
  "Children below 5 yrs complimentary",
];

export const PRIVATE_POLICIES: string[] = [
  "Check-in 11:45 AM · Check-out 8:30 AM the next day.",
  "AC runs 9 PM – 6 AM in bedrooms. Full-time AC available on request at additional cost.",
  "Children below 5 years stay complimentary when sharing with parents. Above 5 years charged as extra person.",
  "The boat is exclusively yours — complete privacy for your group.",
  "After 5:30 PM the boat halts near a village area for the night.",
  "Lunch break is 2 hours — boat will be anchored.",
  "Extra food or menu changes must be informed at least 1 day prior.",
  "Payments are prepaid — full amount to be paid at check-in.",
  "Management is not responsible for late arrivals. Check-out time is strictly followed.",
];

export interface MenuItem {
  meal: string;
  items: string;
}

export const PRIVATE_MENU: MenuItem[] = [
  { meal: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
  { meal: "Lunch", items: "Rice, Karimeen Fish Fry, Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry (Payar Mezhukku), Pappad, Pickle, Salad" },
  { meal: "Evening", items: "Tea/Coffee with Pazhampori (banana fritters)" },
  { meal: "Dinner", items: "Rice, Chapathi, Chicken Curry, Dal Curry, Vendakka Mezhukku (Okra Fry)" },
  { meal: "Breakfast", items: "Idly, Sambar, Chutney, Tea/Coffee with Sliced Pineapple" },
];

export const PRIVATE_ROUTE = "Starting from Alleppey → Punnamada Lake → Vembanad Lake → R Block & C Block (man-made paddy fields below sea level) → Rani → Chithira → Marthandam → Kainakari → Dock at Kuppapuram (evening). Next day: Kuppapuram → Meenapally Kayal → Pallathuruthy → Return to Alleppey.";

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
    longDescription: `Booking the whole boat means the lounge, the dining table, the sundeck, and the kitchen are yours alone — perfect for families, friends, and celebrations. Check in at 11:45 AM at the Alleppey jetty, settle into your ${bedWord}, and cruise through Punnamada Lake, Vembanad Lake, and the village canals as a personal chef prepares authentic Kerala meals onboard. After 5:30 PM the boat moors near a quiet village for the night, and you wake to a sunrise cruise through Meenapally Kayal and Pallathuruthy back to Alleppey by 8:30 AM. A ${beds}-bedroom boat comfortably hosts ${guests} guests with room to spread out.`,
    bathrooms: beds,
    layout: [
      `${beds} air-conditioned ${bedWord}`,
      `${beds} attached ${beds === 1 ? "bathroom" : "bathrooms"}`,
      "Living & dining lounge",
      "Open-air sundeck",
      "Onboard kitchen with personal chef",
      "Music system",
    ],
    facts: [
      { label: "Bedrooms", value: String(beds) },
      { label: "Guests", value: guests },
      { label: "Check-in", value: "11:45 AM" },
      { label: "Check-out", value: "8:30 AM" },
    ],
  };
}

export function getHouseboatDetail(slug: string): HouseboatDetail | null {
  const boat = privateBoats.find((b) => houseboatSlug(b.beds) === slug);
  return boat ? buildDetail(boat) : null;
}

export const houseboatSlugs: string[] = privateBoats.map((b) => houseboatSlug(b.beds));
