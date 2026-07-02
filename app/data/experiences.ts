// Content for shared-cruise & add-on experience detail pages. Extracted from the
// route component so the sitemap and structured data can share the same source.

export interface MenuItem {
  meal: string;
  items: string;
}

export interface Experience {
  name: string;
  tagline: string;
  duration: string;
  capacity: string;
  price: string;
  priceUnit: string;
  images: { src: string; objectPosition?: string }[];
  description: string;
  longDescription: string;
  includes: string[];
  highlights: string[];
  layout: string[];
  menu: MenuItem[];
  route: string;
  policies: string[];
  facts: { label: string; value: string }[];
}

export const experiences: Record<string, Experience> = {
  "day-cruise": {
    name: "Day Cruise — Shared Houseboat",
    tagline: "The perfect introduction to the backwaters",
    duration: "8 hours",
    capacity: "Up to 15 guests",
    price: "₹5,000",
    priceUnit: "person",
    images: [
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.04%20AM%20(1).jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.07%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.08%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.09%20AM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.23%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.25%20PM.jpeg" },
    ],
    description:
      "A shared houseboat means you book a private cabin on a larger boat, sharing common areas like the living room, dining space, and sundeck with other travelers — a budget-friendly way to experience Kerala's backwaters.",
    longDescription:
      "Our Day Cruise is the ideal introduction to the Kerala backwaters for travelers short on time. Board the houseboat at the Alleppey dock around 10 AM, settle into the luxurious shared lounge, and cruise through palm-lined canals and paddy fields. A freshly prepared Kerala lunch is served on board — featuring rice, karimeen fish fry, sambar, thoran, and more. The cruise takes you past Punnamada Lake, village canals, and scenic waterways before returning to the dock by evening. You'll share the common areas with fellow travelers, making it perfect for solo travelers or couples wanting affordability and a social atmosphere.",
    includes: [
      "Welcome drinks (lemon/soft drinks)",
      "Full Kerala lunch on board",
      "Afternoon tea/coffee with pazhampori",
      "Shared luxury lounge & sundeck",
      "Personal chef on board",
      "Experienced 3-member crew (Captain, Cook, Engine Driver)",
      "Music system onboard",
    ],
    highlights: [
      "Cruise through Punnamada & Vembanad Lake",
      "Authentic Kerala meals cooked onboard",
      "Private cabin with attached bathroom",
      "Share sundeck & lounge with travelers",
      "Music system onboard",
      "Scenic village canal routes",
    ],
    layout: [
      "Private cabin with attached bathroom",
      "Shared living & dining lounge",
      "Open-air sundeck",
      "Onboard kitchen with personal chef",
      "Music system",
    ],
    menu: [
      { meal: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
      { meal: "Lunch", items: "Rice, Karimeen Fish Fry, Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry (Payar Mezhukku), Pappad, Pickle, Salad" },
      { meal: "Evening", items: "Tea/Coffee with Pazhampori (banana fritters)" },
    ],
    route: "Starting from Alleppey → Punnamada Lake → Vembanad Lake → R Block & C Block (man-made paddy fields below sea level) → Rani → Chithira → Marthandam → Kainakari → Return to Alleppey.",
    policies: [
      "You can enjoy privacy in your room, but common areas (lounge, dining, sundeck) are shared.",
      "Children below 5 yrs complimentary (sharing with parents). Above 5 yrs charged as extra person.",
      "Extra food or menu changes must be informed at least 1 day in advance.",
      "Payments are prepaid — full amount to be paid at check-in.",
      "Management is not responsible for late arrivals.",
      "Actual boat may vary depending on how many guests are booked on the same date.",
    ],
    facts: [
      { label: "Duration", value: "8 hours" },
      { label: "Capacity", value: "Up to 15 guests" },
      { label: "Meals", value: "Lunch & snacks" },
      { label: "Rating", value: "5.0 / 5" },
    ],
  },
  "overnight-stay": {
    name: "Overnight Stay — Shared Houseboat",
    tagline: "Sleep on the water, wake up to paradise",
    duration: "22 hours",
    capacity: "Up to 10 guests",
    price: "₹5,000",
    priceUnit: "person",
    images: [
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.24%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.52%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.53%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.54%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.55%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.56%20PM.jpeg" },
    ],
    description:
      "Book a private cabin with bed and attached bathroom on a shared deluxe houseboat. Share the living room, dining space, and sundeck with other travelers while enjoying a full backwater cruise with all meals included.",
    longDescription:
      "The Overnight Stay is our signature shared houseboat experience. Check in at 1:30–2:00 PM at the Alleppey dock and settle into your private cabin with comfortable bed and clean attached toilet. Starting from Alleppey, the cruise takes you through Punnamada Lake, Vembanad Lake, R Block and C Block (man-made paddy fields where cultivation happens below sea level), past Kainakari villages, and docks near Kuppapuram in the evening. After 5:30 PM the boat anchors near the village area for the night. Next morning, the cruise continues through Pallathuruthy and returns to Alleppey by 8:30 AM. A personal chef prepares all meals onboard — lunch, evening snacks, dinner, and breakfast. Air conditioning runs from 9 PM to 6 AM in rooms. You enjoy full privacy in your cabin while sharing common spaces with fellow travelers.",
    includes: [
      "Private cabin with bed & attached bathroom",
      "Welcome drinks on arrival",
      "Full Kerala lunch, evening snacks, dinner & breakfast",
      "Personal chef onboard",
      "AC in rooms (9 PM – 6 AM)",
      "Experienced 3-member crew (Captain, Cook, Engine Driver)",
      "Music system onboard",
      "Children below 5 yrs complimentary",
    ],
    highlights: [
      "Private cabin — your own space on a shared boat",
      "Cruise through Vembanad Lake & village canals",
      "R Block & C Block — paddy fields below sea level",
      "Dock near Kuppapuram village overnight",
      "Sunrise cruise back to Alleppey",
      "All 4 meals included with authentic Kerala cuisine",
    ],
    layout: [
      "Private AC cabin with attached bathroom",
      "Shared living & dining lounge",
      "Open-air sundeck",
      "Onboard kitchen with personal chef",
      "Music system",
    ],
    menu: [
      { meal: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
      { meal: "Lunch", items: "Rice, Karimeen Fish Fry, Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry (Payar Mezhukku), Pappad, Pickle, Salad" },
      { meal: "Evening", items: "Tea/Coffee with Pazhampori (banana fritters)" },
      { meal: "Dinner", items: "Rice, Chapathi, Chicken Curry, Dal Curry, Vendakka Mezhukku (Okra Fry)" },
      { meal: "Breakfast", items: "Idly, Sambar, Chutney, Tea/Coffee with Sliced Pineapple" },
    ],
    route: "Starting from Alleppey → Punnamada Lake → Vembanad Lake → R Block & C Block (man-made paddy fields below sea level) → Rani → Chithira → Marthandam → Kainakari → Dock at Kuppapuram (evening). Next day: Kuppapuram → Pallathuruthy → Return to Alleppey.",
    policies: [
      "Check-in: 1:30 PM – 2:00 PM · Check-out: 8:30 AM",
      "AC timing: 9 PM to 6 AM (rooms only). Daytime AC available at ₹2,000/room extra.",
      "Children below 5 yrs complimentary (sharing with parents). Above 5 yrs charged as extra person.",
      "You can enjoy privacy in your room, but common areas (lounge, dining, sundeck) are shared.",
      "After 5:30 PM the boat halts near a village area for the night.",
      "Extra food or menu changes must be informed at least 1 day in advance.",
      "Payments are prepaid — full amount to be paid at check-in.",
      "Management is not responsible for late arrivals. Check-out time is strictly followed.",
      "Actual boat may vary depending on how many guests are booked on the same date.",
    ],
    facts: [
      { label: "Duration", value: "22 hours" },
      { label: "Capacity", value: "Up to 10 guests" },
      { label: "Check-in", value: "1:30 – 2:00 PM" },
      { label: "Check-out", value: "8:30 AM" },
    ],
  },
  shikara: {
    name: "Shikara Ride",
    tagline: "Glide in silence through narrow canals",
    duration: "1–3 hours",
    capacity: "2–6 guests",
    price: "₹800",
    priceUnit: "hour",
    images: [
      { src: "/shikara/shikara-1.jpg" },
      { src: "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.11%20PM.jpeg" },
      { src: "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.12%20PM.jpeg" },
      { src: "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.13%20PM.jpeg" },
      { src: "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.14%20PM.jpeg" },
      { src: "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.15%20PM.jpeg" },
    ],
    description:
      "A handcrafted wooden canoe with cushioned seating and a canopy overhead. Perfect for couples or small groups wanting a quiet, intimate ride through the narrowest backwater canals.",
    longDescription:
      "The Shikara is the most traditional way to explore the backwaters. These beautifully crafted wooden boats feature cushioned seating, colorful canopies, and are paddled by an experienced local boatman. Unlike houseboats, shikaras can navigate the narrowest canals, taking you into parts of the backwaters that larger vessels simply cannot reach. Perfect for couples on a romantic outing, families with young children, or anyone seeking a quieter alternative to motorized boats.",
    includes: [
      "Cushioned seating with canopy",
      "Experienced local boatman",
      "Bottled water",
      "Flexible route based on your interests",
      "Photo stops at scenic locations",
      "Pick-up and drop at your hotel dock",
    ],
    highlights: [
      "Navigate the narrowest village canals",
      "Zero engine noise — pure silence",
      "Get closer to wildlife and birdlife",
      "Ideal for photography enthusiasts",
      "Romantic sunset rides available",
      "Customizable route and duration",
    ],
    layout: [
      "Cushioned seating for 2–6",
      "Canopy overhead for shade",
      "Life jackets on board",
    ],
    menu: [],
    route: "",
    policies: [],
    facts: [
      { label: "Duration", value: "1–3 hours" },
      { label: "Capacity", value: "2–6 guests" },
      { label: "Best for", value: "Couples & friends" },
      { label: "Rating", value: "5.0 / 5" },
    ],
  },
  kayak: {
    name: "Kayak Adventure",
    tagline: "Paddle your own path through the backwaters",
    duration: "2–4 hours",
    capacity: "1–2 per kayak",
    price: "₹500",
    priceUnit: "hour",
    images: [
      { src: "/kayak/kayak-1.jpg" },
      { src: "/kayak&speedboat/WhatsApp%20Image%202026-06-18%20at%2012.18.14%20PM.jpeg" },
      { src: "/kayak&speedboat/WhatsApp%20Image%202026-06-18%20at%2012.18.15%20PM.jpeg" },
    ],
    description:
      "Explore hidden waterways at your own pace. Single and tandem kayaks available — no experience needed, just a sense of adventure.",
    longDescription:
      "Kayaking the Kerala backwaters is for the adventurous traveler who wants to go beyond the typical tourist route. We provide high-quality sit-on-top kayaks that are stable, comfortable, and easy to paddle — even for complete beginners. A brief orientation gets you comfortable before you set off on a guided route through mangrove-lined channels, past lily ponds, and alongside village life at the water's edge.",
    includes: [
      "High-quality sit-on-top kayak",
      "Life jacket & safety briefing",
      "Paddle & dry bag",
      "Guided route or self-guided map",
      "Bottled water",
      "Return transfer to starting point",
    ],
    highlights: [
      "Paddle through mangrove tunnels",
      "Get the best workout of your trip",
      "Spot kingfishers and egrets up close",
      "No experience required",
      "Tandem kayaks for couples",
      "Sunrise and sunset slots available",
    ],
    layout: [
      "Sit-on-top kayak (single or tandem)",
      "Paddle & dry bag",
      "Life jacket provided",
    ],
    menu: [],
    route: "",
    policies: [],
    facts: [
      { label: "Duration", value: "2–4 hours" },
      { label: "Capacity", value: "1–2 per kayak" },
      { label: "Best for", value: "Adventurers" },
      { label: "Rating", value: "5.0 / 5" },
    ],
  },
  speedboat: {
    name: "Speedboat Tour",
    tagline: "Cover more water in less time",
    duration: "1–2 hours",
    capacity: "4–8 guests",
    price: "₹2,000",
    priceUnit: "hour",
    images: [
      { src: "/speedboat/speedboat-1.jpg" },
      { src: "/kayak&speedboat/WhatsApp%20Image%202026-06-18%20at%2012.18.14%20PM%20(1).jpeg" },
      { src: "/kayak/kayak-1.jpg" },
    ],
    description:
      "See more of the backwaters in less time. Ideal for transfers between islands, quick sightseeing runs, or anyone who likes wind in their hair.",
    longDescription:
      "Our speedboat service is perfect for travelers short on time but big on ambition. Cover vast stretches of the backwaters in a fraction of the time. The boat is modern, comfortable, and piloted by an experienced captain. Popular uses include transfers across the backwaters, quick sightseeing sprints, or the thrill of cutting through the water at speed. Groups of up to 8 can book together.",
    includes: [
      "Modern speedboat with cushioned seating",
      "Experienced captain",
      "Life jackets for all passengers",
      "Flexible route planning",
      "Hotel dock pick-up available",
      "Bottled water onboard",
    ],
    highlights: [
      "Cover 10x more distance than a shikara",
      "Perfect for transfers and connections",
      "Thrilling open-water experience",
      "Groups of up to 8 guests",
      "Sunset speed runs available",
      "Combine with a houseboat for variety",
    ],
    layout: [
      "Cushioned seating for 4–8",
      "Life jackets for all passengers",
      "Modern engine & safety equipment",
    ],
    menu: [],
    route: "",
    policies: [],
    facts: [
      { label: "Duration", value: "1–2 hours" },
      { label: "Capacity", value: "4–8 guests" },
      { label: "Best for", value: "Groups" },
      { label: "Rating", value: "5.0 / 5" },
    ],
  },
};

export const EXPERIENCE_SLUGS = Object.keys(experiences);

export function getExperience(slug: string): Experience | undefined {
  return experiences[slug];
}
