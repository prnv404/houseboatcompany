import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HouseboatGallery from "../../components/houseboat-gallery";
import { CheckIcon, PhoneIcon, StarIcon, WhatsAppIcon } from "../../components/icons";
import { PHONE_NUMBER, whatsappLink } from "../../lib/contact";

interface MenuItem {
  meal: string;
  items: string;
}

interface Experience {
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

const experiences: Record<string, Experience> = {
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

export async function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiences[slug];
  if (!exp) return { title: "Not Found" };
  return {
    title: `${exp.name} — Alleppey HouseBoat Company`,
    description: exp.description,
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experiences[slug];
  if (!exp) notFound();

  const bookingMessage = `Hi! I'd like to book the ${exp.name} (${exp.price}/${exp.priceUnit}). Please share availability and details.`;
  const journey = exp.route
    ? exp.route.split("→").map((s) => s.trim()).filter(Boolean)
    : [];
  const otherExperiences = Object.entries(experiences)
    .filter(([s]) => s !== slug)
    .slice(0, 6);

  return (
    <main className="pb-24 lg:pb-0">
      {/* Back nav */}
      <div className="mx-auto max-w-6xl px-5 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <Link
          href="/#sharing"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to all experiences
        </Link>
      </div>

      {/* Title */}
      <header className="mx-auto max-w-6xl px-5 pt-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              {exp.name}
            </h1>
            <p className="mt-1.5 text-base text-gray-500 sm:text-lg">{exp.tagline}</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-ocean-50 px-3.5 py-1.5 text-sm font-bold text-ocean-700">
            <StarIcon className="h-4 w-4 fill-ocean-500" />
            5.0
            <span className="font-medium text-ocean-600/70">· {exp.capacity}</span>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <HouseboatGallery images={exp.images} name={exp.name} />
      </section>

      {/* Quick facts */}
      <div className="mx-auto mt-8 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-100 sm:grid-cols-4">
          {exp.facts.map((f) => (
            <div key={f.label} className="bg-white p-4 text-center sm:p-5">
              <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{f.label}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 sm:text-base">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            {/* Main column */}
            <div className="space-y-12 lg:col-span-2">
              {/* About */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">Overview</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">About this houseboat</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">{exp.description}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{exp.longDescription}</p>
              </div>

              {/* Layout */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">The boat</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">What&apos;s onboard</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {exp.layout.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ocean-50">
                        <CheckIcon className="h-4 w-4 text-ocean-600" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">Why you&apos;ll love it</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">Highlights</h2>
                <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {exp.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean-100">
                        <CheckIcon className="h-3.5 w-3.5 text-ocean-700" />
                      </span>
                      <span className="text-[15px] leading-relaxed text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route */}
              {journey.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">The journey</p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">Cruise route</h2>
                  <ol className="mt-5 ml-1 border-l-2 border-dashed border-ocean-200">
                    {journey.map((stop, i) => (
                      <li key={`${stop}-${i}`} className="relative pb-5 pl-6 last:pb-0">
                        <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-ocean-500 bg-white" />
                        <p className="text-sm leading-relaxed text-gray-700">{stop}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Menu */}
              {exp.menu.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">Dining</p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">What&apos;s on the menu</h2>
                  <div className="mt-5 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                    {exp.menu.map((m) => (
                      <div key={m.meal} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6 sm:p-5">
                        <p className="shrink-0 text-sm font-semibold text-gray-900 sm:w-32">{m.meal}</p>
                        <p className="text-sm leading-relaxed text-gray-500">{m.items}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Good to know */}
              {exp.policies.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">Good to know</p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">Important information</h2>
                  <div className="mt-5 rounded-2xl bg-gray-50 p-5 sm:p-6">
                    <ul className="space-y-3">
                      {exp.policies.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Booking sidebar — hidden on mobile (sticky bottom bar covers it) */}
            <div className="hidden lg:col-span-1 lg:block">
              <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/60">
                <div className="border-b border-gray-100 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-3xl font-bold tracking-tight text-gray-900">
                        {exp.price}
                        <span className="text-base font-medium text-gray-400">/{exp.priceUnit}</span>
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        {exp.duration} · {exp.capacity}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-900">What&apos;s included</h4>
                  <ul className="mt-3 space-y-2.5">
                    {exp.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href={whatsappLink(bookingMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ocean-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
                    >
                      <WhatsAppIcon className="h-4 w-4 fill-current" />
                      Book Now
                    </a>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    No payment now · Pay at check-in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other experiences */}
      <section className="border-t border-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Explore other experiences</h2>
          <p className="mt-1 text-sm text-gray-400">More ways to experience the backwaters.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {otherExperiences.map(([s, e]) => (
              <Link key={s} href={`/experiences/${s}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={e.images[0].src}
                    alt={e.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 16vw"
                    style={e.images[0].objectPosition ? { objectPosition: e.images[0].objectPosition } : undefined}
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">{e.name}</h3>
                  <p className="text-[11px] text-gray-400">{e.duration} · {e.capacity}</p>
                  <p className="mt-0.5 text-xs font-bold text-gray-900 sm:text-sm">From {e.price}/{e.priceUnit}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-lg lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] text-gray-400">{exp.duration} · {exp.capacity}</p>
            <p className="text-base font-bold leading-tight text-gray-900">
              {exp.price}
              <span className="text-xs font-medium text-gray-400">/{exp.priceUnit}</span>
            </p>
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call to book"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href={whatsappLink(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-ocean-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
          >
            <WhatsAppIcon className="h-5 w-5 fill-current" />
            Book Now
          </a>
        </div>
      </div>
    </main>
  );
}
