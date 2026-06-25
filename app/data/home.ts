// Content for the home page. Kept separate from presentation so copy,
// pricing, and imagery can be edited without touching component markup.

export interface CarouselImage {
  src: string;
  objectPosition?: string;
}

export interface Vessel {
  name: string;
  slug: string;
  tagline: string;
  capacity: string;
  duration: string;
  description: string;
  image: string;
}

export interface SharedExperience {
  name: string;
  slug: string;
  badge: string;
  badgeColor: string;
  duration: string;
  capacity: string;
  price: string;
  images: CarouselImage[];
  description: string;
  includes: string[];
}

export interface PrivateBoat {
  beds: number;
  guests: string;
  price: string;
  images: CarouselImage[];
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export const vessels: Vessel[] = [
  {
    name: "Shikara",
    slug: "shikara",
    tagline: "Glide in silence",
    capacity: "2–6 guests",
    duration: "1–3 hours",
    description:
      "A handcrafted wooden canoe with cushioned seating and a canopy overhead. Perfect for couples wanting a quiet ride through narrow canals.",
    image: "/shikara/shikara-1.jpg",
  },
  {
    name: "Kayak",
    slug: "kayak",
    tagline: "Paddle your own path",
    capacity: "1–2 per kayak",
    duration: "2–4 hours",
    description:
      "Explore hidden waterways at your own pace. Single and tandem kayaks available — no experience needed, just adventure.",
    image: "/kayak/kayak-1.jpg",
  },
  {
    name: "Speedboat",
    slug: "speedboat",
    tagline: "Cover more water",
    capacity: "4–8 guests",
    duration: "1–2 hours",
    description:
      "See more of the backwaters in less time. Ideal for transfers, quick sightseeing, or anyone who likes wind in their hair.",
    image: "/speedboat/speedboat-1.jpg",
  },
];

export const queenGallery: { src: string; alt: string }[] = [
  { src: "/houseboat/14-bed/exterior.jpeg", alt: "Houseboat cruising the backwaters" },
  { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.52%20PM.jpeg", alt: "1 bedroom houseboat interior" },
  { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.53%20PM.jpeg", alt: "1 bedroom houseboat view" },
  { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.54%20PM.jpeg", alt: "1 bedroom houseboat cabin" },
  { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.55%20PM.jpeg", alt: "1 bedroom houseboat deck" },
  { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.56%20PM.jpeg", alt: "1 bedroom houseboat lounge" },
  { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.01%20AM.jpeg", alt: "8 bedroom houseboat exterior" },
  { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.02%20AM.jpeg", alt: "8 bedroom houseboat lounge" },
  { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.03%20AM.jpeg", alt: "8 bedroom houseboat dining" },
  { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.04%20AM.jpeg", alt: "8 bedroom houseboat bedroom" },
  { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.05%20AM.jpeg", alt: "8 bedroom houseboat deck" },
  { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.06%20AM.jpeg", alt: "8 bedroom houseboat sundeck" },
  { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.11%20PM.jpeg", alt: "14 bedroom houseboat exterior" },
  { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.13%20PM.jpeg", alt: "14 bedroom houseboat lounge" },
  { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.15%20PM.jpeg", alt: "14 bedroom houseboat bedroom" },
  { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.17%20PM.jpeg", alt: "14 bedroom houseboat dining" },
  { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.19%20PM.jpeg", alt: "14 bedroom houseboat deck" },
  { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.21%20PM.jpeg", alt: "14 bedroom houseboat sundeck" },
];

export const steps: Step[] = [
  {
    step: "01",
    title: "Pick Your Experience",
    description: "Choose between a day cruise or overnight stay on our shared houseboat.",
  },
  {
    step: "02",
    title: "Select Your Dates",
    description: "Check availability and pick a date that works for you and your group.",
  },
  {
    step: "03",
    title: "Book & Board",
    description: "Confirm your spot, show up at the dock, and let us handle the rest.",
  },
];

export const sharedExperiences: SharedExperience[] = [
  {
    name: "Day Cruise",
    slug: "day-cruise",
    badge: "Most Booked",
    badgeColor: "bg-ocean-600",
    duration: "1 Day",
    capacity: "Up to 15 guests",
    price: "₹5,000",
    images: [
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.04%20AM%20(1).jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.01%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.03%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.05%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.08%20AM.jpeg" },
    ],
    description:
      "Private cabin on a shared deluxe houseboat. Cruise through Punnamada & Vembanad Lake with a Kerala lunch, tea, and snacks — all included.",
    includes: ["Kerala lunch", "Welcome drinks", "Personal chef", "3-member crew"],
  },
  {
    name: "Overnight Stay",
    slug: "overnight-stay",
    badge: "Best Experience",
    badgeColor: "bg-ocean-900",
    duration: "2 Days & 1 Night",
    capacity: "Up to 10 guests",
    price: "₹5,000",
    images: [
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.24%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.15%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.17%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.19%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.21%20PM.jpeg" },
    ],
    description:
      "Private cabin with AC (9 PM–6 AM). Check-in 1:30 PM, check-out 8:30 AM. All 4 meals included — lunch, snacks, dinner & breakfast.",
    includes: ["4 meals included", "AC cabin", "Personal chef", "22-hour cruise"],
  },
];

export const sharedValueProps: string[] = [
  "₹5,000 for two",
  "All meals included",
  "Meet fellow travelers",
  "Verified & safe",
];

export const privateBoats: PrivateBoat[] = [
  {
    beds: 1,
    guests: "2–4",
    price: "₹8,000",
    images: [
      { src: "/houseboat/1-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.52%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.53%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.54%20PM.jpeg" },
      { src: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.55%20PM.jpeg" },
    ],
  },
  {
    beds: 2,
    guests: "4–8",
    price: "₹12,000",
    images: [
      { src: "/houseboat/2-bed/exterior.jpeg", objectPosition: "center 35%" },
      { src: "/houseboat/2-bed/WhatsApp%20Image%202026-06-20%20at%2010.24.03%20AM.jpeg" },
      { src: "/houseboat/2-bed/WhatsApp%20Image%202026-06-20%20at%2010.24.04%20AM%20(1).jpeg" },
      { src: "/houseboat/2-bed/WhatsApp%20Image%202026-06-20%20at%2010.24.05%20AM.jpeg" },
      { src: "/houseboat/2-bed/WhatsApp%20Image%202026-06-20%20at%2010.24.06%20AM.jpeg" },
    ],
  },
  {
    beds: 3,
    guests: "6–12",
    price: "₹16,000",
    images: [
      { src: "/houseboat/3-bed/exterior.jpeg" },
      { src: "/houseboat/3-bed/WhatsApp%20Image%202026-06-20%20at%2010.21.52%20AM.jpeg" },
      { src: "/houseboat/3-bed/WhatsApp%20Image%202026-06-20%20at%2010.21.53%20AM.jpeg" },
      { src: "/houseboat/3-bed/WhatsApp%20Image%202026-06-20%20at%2010.21.54%20AM.jpeg" },
      { src: "/houseboat/3-bed/WhatsApp%20Image%202026-06-20%20at%2010.32.08%20AM.jpeg" },
    ],
  },
  {
    beds: 4,
    guests: "8–16",
    price: "₹22,000",
    images: [
      { src: "/houseboat/4-bed/exterior.jpeg" },
      { src: "/houseboat/4-bed/WhatsApp%20Image%202026-06-20%20at%2010.15.32%20AM.jpeg" },
      { src: "/houseboat/4-bed/WhatsApp%20Image%202026-06-20%20at%2010.15.33%20AM.jpeg" },
      { src: "/houseboat/4-bed/WhatsApp%20Image%202026-06-20%20at%2010.15.34%20AM.jpeg" },
      { src: "/houseboat/4-bed/WhatsApp%20Image%202026-06-20%20at%2010.15.35%20AM.jpeg" },
    ],
  },
  {
    beds: 5,
    guests: "10–20",
    price: "₹28,000",
    images: [
      { src: "/houseboat/5-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/5-bed/WhatsApp%20Image%202026-06-20%20at%2010.16.41%20AM.jpeg" },
      { src: "/houseboat/5-bed/WhatsApp%20Image%202026-06-20%20at%2010.16.41%20AM%20(1).jpeg" },
      { src: "/houseboat/5-bed/WhatsApp%20Image%202026-06-20%20at%2010.16.42%20AM.jpeg" },
      { src: "/houseboat/5-bed/WhatsApp%20Image%202026-06-20%20at%2010.16.43%20AM.jpeg" },
    ],
  },
  {
    beds: 6,
    guests: "12–24",
    price: "₹34,000",
    images: [
      { src: "/houseboat/6-bed/exterior.jpeg" },
      { src: "/houseboat/6-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.04%20AM%20(1).jpeg" },
      { src: "/houseboat/6-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.05%20AM.jpeg" },
      { src: "/houseboat/6-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.06%20AM.jpeg" },
      { src: "/houseboat/6-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.07%20AM.jpeg" },
    ],
  },
  {
    beds: 7,
    guests: "14–28",
    price: "₹40,000",
    images: [
      { src: "/houseboat/7-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/7-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.31%20AM.jpeg" },
      { src: "/houseboat/7-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.32%20AM.jpeg" },
      { src: "/houseboat/7-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.33%20AM.jpeg" },
      { src: "/houseboat/7-bed/WhatsApp%20Image%202026-06-20%20at%2010.18.34%20AM.jpeg" },
    ],
  },
  {
    beds: 8,
    guests: "16–32",
    price: "₹46,000",
    images: [
      { src: "/houseboat/8-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.05%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.06%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.07%20AM.jpeg" },
      { src: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.08%20AM.jpeg" },
    ],
  },
  {
    beds: 9,
    guests: "18–36",
    price: "₹52,000",
    images: [
      { src: "/houseboat/10-bed/exterior.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.17%20AM.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.18%20AM.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.19%20AM.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.20%20AM.jpeg" },
    ],
  },
  {
    beds: 10,
    guests: "20–40",
    price: "₹58,000",
    images: [
      { src: "/houseboat/10-bed/exterior.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.21%20AM.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.22%20AM.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.23%20AM.jpeg" },
      { src: "/houseboat/10-bed/WhatsApp%20Image%202026-06-22%20at%2010.48.23%20AM%20(1).jpeg" },
    ],
  },
  {
    beds: 11,
    guests: "22–44",
    price: "₹64,000",
    images: [
      { src: "/houseboat/14-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.11%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.12%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.13%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.14%20PM.jpeg" },
    ],
  },
  {
    beds: 12,
    guests: "24–48",
    price: "₹70,000",
    images: [
      { src: "/houseboat/14-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.15%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.16%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.17%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.18%20PM.jpeg" },
    ],
  },
  {
    beds: 13,
    guests: "26–52",
    price: "₹76,000",
    images: [
      { src: "/houseboat/14-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.19%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.20%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.21%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.22%20PM.jpeg" },
    ],
  },
  {
    beds: 14,
    guests: "28–56",
    price: "₹82,000",
    images: [
      { src: "/houseboat/14-bed/exterior.jpeg", objectPosition: "center 40%" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.23%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.25%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.27%20PM.jpeg" },
      { src: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.29%20PM.jpeg" },
    ],
  },
];
