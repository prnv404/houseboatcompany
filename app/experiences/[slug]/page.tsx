import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">
        {eyebrow}
      </p>
      <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
    </div>
  );
}

const ICON = {
  clock: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  users:
    "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0",
  calendar:
    "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  star:
    "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
} as const;

const experiences: Record<
  string,
  {
    name: string;
    tagline: string;
    duration: string;
    capacity: string;
    price: string;
    heroImage: string;
    description: string;
    longDescription: string;
    includes: string[];
    highlights: string[];
    gallery: string[];
    type: "shared" | "vessel";
    checkIn?: string;
    checkOut?: string;
    route?: string;
    menu?: { meal: string; items: string }[];
    policies?: string[];
  }
> = {
  "day-cruise": {
    name: "Day Cruise",
    tagline: "The perfect introduction to the backwaters",
    duration: "8 hours",
    capacity: "Up to 15 guests",
    price: "₹5,000/person",
    heroImage: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.07%20AM.jpeg",
    type: "shared",
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
      "Experienced 3-member crew",
    ],
    highlights: [
      "Cruise through Punnamada & Vembanad Lake",
      "Authentic Kerala meals cooked onboard",
      "Private cabin with attached bathroom",
      "Share sundeck & lounge with travelers",
      "Music system onboard",
      "Scenic village canal routes",
    ],
    gallery: [
      "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.07%20AM.jpeg",
      "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.08%20AM.jpeg",
      "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.09%20AM.jpeg",
      "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.23%20PM.jpeg",
      "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.25%20PM.jpeg",
      "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.27%20PM.jpeg",
    ],
    menu: [
      { meal: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
      { meal: "Lunch", items: "Rice, Karimeen Fish Fry, Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry (Payar Mezhukku), Pappad, Pickle, Salad" },
      { meal: "Evening", items: "Tea/Coffee with Pazhampori (banana fritters)" },
    ],
  },
  "overnight-stay": {
    name: "Overnight Stay",
    tagline: "Sleep on the water, wake up to paradise",
    duration: "22 hours",
    capacity: "Up to 10 guests",
    price: "₹5,000/person",
    heroImage: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.57%20PM.jpeg",
    type: "shared",
    checkIn: "1:30 PM – 2:00 PM",
    checkOut: "8:30 AM",
    description:
      "Book a private cabin with bed and attached bathroom on a shared deluxe houseboat. Share the living room, dining space, and sundeck with other travelers while enjoying a full backwater cruise with all meals included.",
    longDescription:
      "The Overnight Stay is our signature shared houseboat experience. Check in at 1:30–2:00 PM at the Alleppey dock and settle into your private cabin with comfortable bed and clean attached toilet. Starting from Alleppey, the cruise takes you through Punnamada Lake, Vembanad Lake, R Block and C Block (man-made paddy fields where cultivation happens below sea level), past Kainakari villages, and docks near Kuppapuram in the evening. After 5:30 PM the boat anchors near the village area for the night. Next morning, the cruise continues through Meenapally Kayal, Pallathuruthy and returns to Alleppey by 8:30 AM. A personal chef prepares all meals onboard — lunch, evening snacks, dinner, and breakfast. Air conditioning runs from 9 PM to 6 AM in rooms. You enjoy full privacy in your cabin while sharing common spaces with fellow travelers.",
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
      "Sunrise cruise through Meenapally Kayal",
      "All 4 meals included with authentic Kerala cuisine",
    ],
    route: "Starting from Alleppey → Punnamada Lake → Vembanad Lake → R Block & C Block (man-made paddy fields below sea level) → Rani → Chithira → Marthandam → Kainakari → Dock at Kuppapuram (evening). Next day: Kuppapuram → Meenapally Kayal → Pallathuruthy → Return to Alleppey.",
    menu: [
      { meal: "Welcome Drink", items: "Soft drinks (lemon or Tang)" },
      { meal: "Lunch", items: "Rice, Karimeen Fish Fry, Sambar, Curd/Pullissery/Rasam, Cabbage Thoran, Long Beans Fry (Payar Mezhukku), Pappad, Pickle, Salad" },
      { meal: "Evening", items: "Tea/Coffee with Pazhampori (banana fritters)" },
      { meal: "Dinner", items: "Rice, Chapathi, Chicken Curry, Dal Curry, Vendakka Mezhukku (Okra Fry)" },
      { meal: "Breakfast", items: "Idly, Sambar, Chutney, Tea/Coffee with Sliced Pineapple" },
    ],
    policies: [
      "Check-in: 1:30 PM – 2:00 PM | Check-out: 8:30 AM",
      "AC timing: 9 PM to 6 AM (rooms only). Full-time AC available at ₹2,000/room extra.",
      "Children below 5 yrs complimentary (sharing with parents). Above 5 yrs charged as extra person.",
      "After 5:30 PM the boat anchors near a village area and does not move.",
      "Extra food or menu changes must be informed at least 1 day in advance.",
      "Payments are prepaid — full amount to be paid at check-in.",
      "Management is not responsible for late arrivals. Check-out time is strictly followed.",
      "Private cabin is yours, but common areas (lounge, dining, sundeck) are shared.",
      "Actual boat may vary depending on how many guests are booked on the same date.",
    ],
    gallery: [
      "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.57%20PM.jpeg",
      "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.52%20PM.jpeg",
      "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.53%20PM.jpeg",
      "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.54%20PM.jpeg",
      "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.55%20PM.jpeg",
      "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.56%20PM.jpeg",
    ],
  },
  shikara: {
    name: "Shikara",
    tagline: "Glide in silence through narrow canals",
    duration: "1–3 hours",
    capacity: "2–6 guests",
    price: "From ₹800/hour",
    heroImage: "/shikara/shikara-1.jpg",
    type: "vessel",
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
    gallery: [
      "/shikara/shikara-1.jpg",
      "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.11%20PM.jpeg",
      "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.12%20PM.jpeg",
      "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.13%20PM.jpeg",
      "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.14%20PM.jpeg",
      "/shikara/WhatsApp%20Image%202026-06-18%20at%2012.13.15%20PM.jpeg",
    ],
  },
  kayak: {
    name: "Kayak",
    tagline: "Paddle your own path through the backwaters",
    duration: "2–4 hours",
    capacity: "1–2 per kayak",
    price: "From ₹500/hour",
    heroImage: "/kayak/kayak-1.jpg",
    type: "vessel",
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
    gallery: [
      "/kayak/kayak-1.jpg",
      "/kayak&speedboat/WhatsApp%20Image%202026-06-18%20at%2012.18.14%20PM.jpeg",
      "/kayak&speedboat/WhatsApp%20Image%202026-06-18%20at%2012.18.15%20PM.jpeg",
    ],
  },
  speedboat: {
    name: "Speedboat",
    tagline: "Cover more water in less time",
    duration: "1–2 hours",
    capacity: "4–8 guests",
    price: "From ₹2,000/hour",
    heroImage: "/speedboat/speedboat-1.jpg",
    type: "vessel",
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
    gallery: [
      "/speedboat/speedboat-1.jpg",
      "/kayak&speedboat/WhatsApp%20Image%202026-06-18%20at%2012.18.14%20PM%20(1).jpeg",
      "/kayak/kayak-1.jpg",
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
    title: `${exp.name} — HouseBoatCompany`,
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

  const [priceMain, priceUnit] = exp.price.split("/");
  const journey = exp.route
    ? exp.route.split("→").map((s) => s.trim()).filter(Boolean)
    : [];
  const facts = [
    { label: "Duration", value: exp.duration, path: ICON.clock },
    { label: "Group size", value: exp.capacity, path: ICON.users },
    exp.checkIn
      ? { label: "Check-in", value: exp.checkIn, path: ICON.calendar }
      : {
          label: "Best for",
          value: exp.type === "shared" ? "Groups" : "Couples & friends",
          path: ICON.users,
        },
    { label: "Rating", value: "5.0 / 5", path: ICON.star },
  ];

  return (
    <main className="pb-24 lg:pb-0">
      {/* Back nav */}
      <div className="mx-auto max-w-6xl px-5 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to all experiences
        </Link>
      </div>

      {/* Hero */}
      <section className="px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/6]">
            <Image
              src={exp.heroImage}
              alt={exp.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

            {/* Rating badge */}
            <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-900 shadow-sm backdrop-blur-sm">
              <svg className="h-3.5 w-3.5 fill-ocean-500" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
              </svg>
              5.0
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <span className="mb-3 inline-block rounded-full bg-ocean-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                {exp.type === "shared" ? "Shared Houseboat" : "Private Vessel"}
              </span>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {exp.name}
              </h1>
              <p className="mt-2 max-w-xl text-base text-white/80 sm:text-lg">
                {exp.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts — overlapping card */}
      <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-5 sm:-mt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-100 shadow-lg shadow-gray-200/60 ring-1 ring-gray-100 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-white p-4 sm:p-5">
              <svg className="h-5 w-5 shrink-0 text-ocean-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={f.path} />
              </svg>
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  {f.label}
                </p>
                <p className="truncate text-sm font-semibold text-gray-900">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            {/* Main content */}
            <div className="space-y-12 lg:col-span-2">
              {/* About */}
              <div>
                <SectionHeading eyebrow="Overview" title="About this experience" />
                <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
                  {exp.description}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500">
                  {exp.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <SectionHeading eyebrow="Why you'll love it" title="Highlights" />
                <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {exp.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean-100">
                        <svg className="h-3.5 w-3.5 text-ocean-700" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-[15px] leading-relaxed text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Journey / Route */}
              {journey.length > 0 && (
                <div>
                  <SectionHeading eyebrow="The journey" title="Cruise route" />
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
              {exp.menu && (
                <div>
                  <SectionHeading eyebrow="Dining" title="What's on the menu" />
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

              {/* Policies */}
              {exp.policies && (
                <div>
                  <SectionHeading eyebrow="Good to know" title="Important information" />
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

              {/* Gallery */}
              {exp.gallery.length > 0 && (
                <div>
                  <SectionHeading eyebrow="Gallery" title="Life aboard" />
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {exp.gallery.map((src, i) => (
                      <div
                        key={src}
                        className={`group relative overflow-hidden rounded-2xl ${
                          i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-auto" : "aspect-square"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={exp.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes={i === 0 ? "(max-width: 640px) 100vw, 44vw" : "(max-width: 640px) 50vw, 22vw"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar — Booking card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/60">
                {/* Price header */}
                <div className="border-b border-gray-100 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-3xl font-bold tracking-tight text-gray-900">
                        {priceMain}
                        {priceUnit && (
                          <span className="text-base font-medium text-gray-400">/{priceUnit}</span>
                        )}
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        {exp.duration} &middot; {exp.capacity}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-ocean-50 px-2.5 py-1 text-xs font-bold text-ocean-700">
                      <svg className="h-3.5 w-3.5 fill-ocean-500" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                      </svg>
                      5.0
                    </div>
                  </div>
                  {exp.checkIn && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
                      <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d={ICON.calendar} />
                      </svg>
                      Check-in {exp.checkIn} &middot; Check-out {exp.checkOut}
                    </div>
                  )}
                </div>

                {/* Included */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-900">What&apos;s included</h4>
                  <ul className="mt-3 space-y-2.5">
                    {exp.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <a
                      href="tel:+916282477940"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      Call
                    </a>
                    <a
                      href={`https://wa.me/916282477940?text=${encodeURIComponent(
                        `Hi! I'd like to book the ${exp.name} (${exp.price}). Please share availability.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ocean-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      Book Now
                    </a>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    No payment now &middot; Pay at check-in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile booking bar — always reachable */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-lg lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] text-gray-400">
              {exp.duration} &middot; {exp.capacity}
            </p>
            <p className="text-base font-bold leading-tight text-gray-900">{exp.price}</p>
          </div>
          <a
            href="tel:+916282477940"
            aria-label="Call to book"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </a>
          <a
            href={`https://wa.me/916282477940?text=${encodeURIComponent(
              `Hi! I'd like to book the ${exp.name} (${exp.price}). Please share availability.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-ocean-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </main>
  );
}
