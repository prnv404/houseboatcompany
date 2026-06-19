import Image from "next/image";
import Link from "next/link";
import FloatingButtons from "./components/floating-buttons";

const vessels = [
  {
    name: "Shikara",
    slug: "shikara",
    tagline: "Glide in silence",
    capacity: "2–6 guests",
    duration: "1–3 hours",
    description: "A handcrafted wooden canoe with cushioned seating and a canopy overhead. Perfect for couples wanting a quiet ride through narrow canals.",
    image: "/shikara/shikara-1.jpg",
  },
  {
    name: "Kayak",
    slug: "kayak",
    tagline: "Paddle your own path",
    capacity: "1–2 per kayak",
    duration: "2–4 hours",
    description: "Explore hidden waterways at your own pace. Single and tandem kayaks available — no experience needed, just adventure.",
    image: "/kayak/kayak-1.jpg",
  },
  {
    name: "Speedboat",
    slug: "speedboat",
    tagline: "Cover more water",
    capacity: "4–8 guests",
    duration: "1–2 hours",
    description: "See more of the backwaters in less time. Ideal for transfers, quick sightseeing, or anyone who likes wind in their hair.",
    image: "/speedboat/speedboat-1.jpg",
  },
];

const queenGallery = [
  { src: "/houseboat/14-bed/carrebian.jpeg", alt: "Houseboat cruising the backwaters" },
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

const steps = [
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

const experiences = [
  {
    name: "Day Cruise",
    slug: "day-cruise",
    badge: "Most Booked",
    badgeColor: "bg-ocean-600",
    duration: "1 Day",
    capacity: "Up to 15 guests",
    price: "₹5,000",
    image: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.04%20AM%20(1).jpeg",
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
    image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.24%20PM.jpeg",
    description:
      "Private cabin with AC (9 PM–6 AM). Check-in 1:30 PM, check-out 8:30 AM. All 4 meals included — lunch, snacks, dinner & breakfast.",
    includes: ["4 meals included", "AC cabin", "Personal chef", "22-hour cruise"],
  },
];

export default function Home() {
  return (
    <>
      <FloatingButtons />

      {/* Hero */}
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative aspect-[3/4] sm:aspect-[2/1]">
              <Image
                src="/houseboat/14-bed/carrebian.jpeg"
                alt="Royal Caribbean houseboat on the backwaters"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                  Kerala Backwaters
                </p>
                <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Shared Luxury
                  <br />
                  Houseboat Experiences
                </h1>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:max-w-xl sm:text-lg">
                  Book your spot, meet fellow travelers, and cruise the backwaters
                  aboard the Vembanad Queen.
                </p>
                <a
                  href="#sharing"
                  className="mt-6 rounded-full bg-ocean-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700 sm:hidden"
                >
                  Explore Experiences
                </a>
              </div>
            </div>

            {/* Booking bar — desktop only, overlaid */}
            <div className="absolute bottom-0 left-0 right-0 hidden px-8 pb-6 sm:block">
              <div className="mx-auto flex max-w-3xl items-end gap-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md">
                <div className="flex-1">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    Travel Dates
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-ocean-400 focus:ring-1 focus:ring-ocean-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                    </svg>
                    Travelers
                  </label>
                  <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-ocean-400 focus:ring-1 focus:ring-ocean-400">
                    <option>2 Person</option>
                    <option>3 Person</option>
                    <option>4 Person</option>
                    <option>5+ Person</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Experience
                  </label>
                  <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-ocean-400 focus:ring-1 focus:ring-ocean-400">
                    <option>All Experiences</option>
                    <option>Day Cruise</option>
                    <option>Overnight Stay</option>
                  </select>
                </div>
                <a
                  href="#sharing"
                  className="rounded-xl bg-ocean-600 px-8 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Shared Houseboat — Dedicated Section */}
      <section id="sharing" className="pt-10 pb-10 sm:pt-16 sm:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Luxury Houseboat. Budget-Friendly Price.
            </h2>
            <p className="mx-auto mt-3 hidden max-w-lg text-sm leading-relaxed text-gray-400 sm:block">
              Starting at ₹5,000 for two — share a deluxe houseboat and cruise the backwaters together.
            </p>
          </div>

          {/* Value props */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8">
            {[
              { label: "₹5,000 for two" },
              { label: "All meals included" },
              { label: "Meet fellow travelers" },
              { label: "Verified & safe" },
            ].map((prop) => (
              <span key={prop.label} className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="h-4 w-4 text-ocean-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {prop.label}
              </span>
            ))}
          </div>

          {/* Shared experience cards */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:mt-10 sm:gap-6">
            {experiences.map((card) => (
              <div key={card.name} className="group">
                {/* Image */}
                <Link href={`/experiences/${card.slug}`} className="relative block aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 50vw"
                  />
                </Link>

                {/* Info */}
                <div className="mt-3 sm:mt-4">
                  <h3 className="text-sm font-semibold text-gray-900 sm:text-base">{card.name}</h3>
                  <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                    {card.duration}
                  </p>
                  <p className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                    From <span>{card.price}</span>
                  </p>

                  {/* Booking buttons */}
                  <div className="mt-3 flex gap-2">
                    <a
                      href="tel:+916282477940"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
                      aria-label="Call to book"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/916282477940?text=${encodeURIComponent(
                        `Hi! I'd like to book the ${card.name} (${card.price} for 2 persons). Please share availability.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ocean-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-ocean-700 sm:text-sm"
                    >
                      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Private Houseboats */}
      <section className="pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Private Houseboats
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
              Book the entire boat for your group — choose by number of bedrooms
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
            {[
              { beds: 1, guests: "2–4", price: "₹8,000", image: "/houseboat/1-bed/WhatsApp%20Image%202026-06-18%20at%202.58.52%20PM.jpeg" },
              { beds: 2, guests: "4–8", price: "₹12,000", image: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.01%20AM.jpeg" },
              { beds: 3, guests: "6–12", price: "₹16,000", image: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.04%20AM%20(1).jpeg" },
              { beds: 4, guests: "8–16", price: "₹22,000", image: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.05%20AM%20(1).jpeg" },
              { beds: 5, guests: "10–20", price: "₹28,000", image: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.06%20AM.jpeg" },
              { beds: 6, guests: "12–24", price: "₹34,000", image: "/houseboat/8-bed/WhatsApp%20Image%202026-06-18%20at%2010.30.09%20AM.jpeg" },
              { beds: 7, guests: "14–28", price: "₹40,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.14%20PM.jpeg" },
              { beds: 8, guests: "16–32", price: "₹46,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.15%20PM%20(1).jpeg" },
              { beds: 9, guests: "18–36", price: "₹52,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.24%20PM.jpeg" },
              { beds: 10, guests: "20–40", price: "₹58,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.25%20PM%20(1).jpeg" },
              { beds: 11, guests: "22–44", price: "₹64,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.27%20PM%20(1).jpeg" },
              { beds: 12, guests: "24–48", price: "₹70,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.28%20PM%20(1).jpeg" },
              { beds: 13, guests: "26–52", price: "₹76,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.29%20PM.jpeg" },
              { beds: 14, guests: "28–56", price: "₹82,000", image: "/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.29%20PM%20(1).jpeg" },
            ].map((boat) => (
              <a
                key={boat.beds}
                href={`https://wa.me/916282477940?text=${encodeURIComponent(`Hi! I'm interested in a ${boat.beds} bedroom private houseboat (from ${boat.price}). Please share availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={boat.image}
                    alt={`${boat.beds} bedroom houseboat`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 14vw"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">{boat.beds} Bedroom</h3>
                  <p className="text-[11px] text-gray-400">{boat.guests} guests</p>
                  <p className="mt-0.5 text-xs font-bold text-gray-900 sm:text-sm">From {boat.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Vessels */}
      <section id="vessels" className="bg-gray-50 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              More Ways to Explore
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Beyond houseboats — explore the backwaters your way
            </p>
          </div>

          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-3 sm:mt-8 sm:gap-4">
            {vessels.map((v) => (
              <Link
                key={v.name}
                href={`/experiences/${v.slug}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-square">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4">
                    <h3 className="text-xs font-semibold text-white sm:text-base">{v.name}</h3>
                    <p className="mt-0.5 hidden text-[11px] text-white/60 sm:block">{v.capacity} · {v.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gray-950">
            <div className="px-6 py-10 sm:px-12 sm:py-14">
              <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
                How It Works
              </h2>

              {/* Desktop — centered grid */}
              <div className="mt-10 hidden gap-0 sm:grid sm:grid-cols-3">
                {steps.map((s, i) => (
                  <div key={s.step} className={`relative flex flex-col items-center text-center ${i < steps.length - 1 ? "border-r border-white/10" : ""}`}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ocean-400 text-sm font-bold text-ocean-400">
                      {s.step}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-white/50">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mobile — left-aligned timeline */}
              <div className="mt-8 flex flex-col gap-6 sm:hidden">
                {steps.map((s, i) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ocean-600 text-xs font-bold text-white">
                        {s.step}
                      </div>
                      {i < steps.length - 1 && <div className="mt-2 h-full w-px bg-white/15" />}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center sm:mt-10">
                <a
                  href={`https://wa.me/916282477940?text=${encodeURIComponent("Hi! I'd like to book a houseboat experience. Please share availability.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100"
                >
                  Start Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Life Aboard
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              A glimpse of what awaits you on the water
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 lg:grid-cols-6">
            {queenGallery.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="stories" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header with Google badge */}
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                What Our Guests Say
              </h2>
              <p className="mt-1 text-sm text-gray-400">Verified reviews from real travelers</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-sm ring-1 ring-gray-100">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-gray-900">5.0</span>
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-gray-400">Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              {
                name: "Priya & Arjun",
                location: "Mumbai",
                time: "2 weeks ago",
                text: "We joined the shared overnight cruise as solo travelers and left as friends. The food, the sunset, the silence at dawn — nothing compares. Highlight of our Kerala trip!",
              },
              {
                name: "Rahul Menon",
                location: "Bangalore",
                time: "1 month ago",
                text: "Absolutely worth it at ₹5,000 for two. The rooms are luxurious, crew was super friendly, and the Kerala meals were authentic. Will definitely come back.",
              },
              {
                name: "Sarah & James",
                location: "London, UK",
                time: "3 weeks ago",
                text: "Best value houseboat experience in Alleppey. We compared many options and this was the clear winner. Clean rooms, great food, stunning backwater views.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="flex w-64 shrink-0 flex-col rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:w-auto sm:shrink sm:rounded-2xl sm:p-6"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean-100 text-xs font-bold text-ocean-700 sm:h-10 sm:w-10 sm:text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 sm:text-sm">{review.name}</p>
                    <p className="text-[11px] text-gray-400 sm:text-xs">{review.location}</p>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-300 sm:text-xs">{review.time}</span>
                </div>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500 sm:mt-3 sm:text-sm">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-16 sm:py-20">
          <Image
            src="/houseboat/14-bed/WhatsApp%20Image%202026-06-18%20at%203.01.12%20PM.jpeg"
            alt="Houseboat on backwaters"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to set sail?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
              Call or WhatsApp us to check availability and book your spot.
            </p>
            <a
              href="tel:+916282477940"
              className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-white/20 transition-colors hover:bg-white/15"
            >
              <svg className="h-5 w-5 text-ocean-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">+91 62824 77940</span>
            </a>
            <div className="mx-auto mt-6 flex max-w-xs gap-3">
              <a
                href="tel:+916282477940"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ocean-900 transition-colors hover:bg-ocean-50"
              >
                Call Now
              </a>
              <a
                href={`https://wa.me/916282477940?text=${encodeURIComponent("Hi! I'd like to book a houseboat experience. Please share availability.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-4 pb-24 sm:pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gray-50 px-8 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.jpeg"
                  alt="Alleppey House Boat Company"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="text-lg font-bold text-gray-900">
                  Alleppey HouseBoat Company
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
                Curated houseboat experiences designed for modern explorers.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Company</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#sharing" className="text-sm text-gray-400 hover:text-gray-600">Experiences</a></li>
                <li><a href="#vessels" className="text-sm text-gray-400 hover:text-gray-600">Vessels</a></li>
                <li><a href="#how-it-works" className="text-sm text-gray-400 hover:text-gray-600">How It Works</a></li>
                <li><a href="#stories" className="text-sm text-gray-400 hover:text-gray-600">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Support</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-600">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-600">Terms</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-600">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-600">Cancellation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Contact Us</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Alleppey, Kerala, India
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  +91 62824 77940
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  hello@houseboatcompany.in
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-8 text-center">
            <p className="text-xs text-gray-300">
              &copy; 2026 HouseBoatCompany. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
