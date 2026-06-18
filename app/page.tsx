import Image from "next/image";
import Header from "./components/header";
import FloatingButtons from "./components/floating-buttons";

const sharedHouseboats = [
  {
    name: "Day Cruise",
    duration: "8 hours",
    groupSize: "Up to 15 guests",
    highlight: "Best value",
    image: "/houseboat/queen/queen-lounge-day-1.jpg",
    includes: ["Lunch on board", "Welcome drinks", "Guided backwater tour"],
    description:
      "Share the magic of the backwaters with fellow travelers. Board a traditional kettuvallam, enjoy a freshly cooked lunch, and cruise through palm-lined canals from morning to evening.",
  },
  {
    name: "Overnight Stay",
    duration: "22 hours",
    groupSize: "Up to 10 guests",
    highlight: "Most popular",
    image: "/houseboat/queen/queen-bedroom-7.jpg",
    includes: ["Dinner & breakfast", "Sunset deck session", "Private sleeping berth"],
    description:
      "Fall asleep to the sound of gentle ripples and wake up to a golden sunrise on the water. Shared cabins, private bunks, and a chef who knows these waters by heart.",
  },
];

const queenGallery = [
  { src: "/houseboat/queen/queen-exterior.jpg", alt: "Vembanad Queen houseboat exterior" },
  { src: "/houseboat/queen/queen-lounge-day-2.jpg", alt: "Lounge area with ornate ceiling" },
  { src: "/houseboat/queen/queen-lounge-night-2.jpg", alt: "Lounge at night with warm lighting" },
  { src: "/houseboat/queen/queen-bedroom-2.jpg", alt: "Luxury bedroom with ambient lighting" },
  { src: "/houseboat/queen/queen-corridor.jpg", alt: "Elegant corridor with wooden flooring" },
  { src: "/houseboat/queen/queen-bedroom-9.jpg", alt: "Bedroom with decorative wall art" },
  { src: "/houseboat/queen/queen-lounge-night-5.jpg", alt: "Ceiling detail and seating area" },
  { src: "/houseboat/queen/queen-bedroom-8.jpg", alt: "Bedroom with ornate headboard" },
];

const vessels = [
  {
    name: "Shikara",
    tagline: "Glide in silence",
    capacity: "2–6 guests",
    duration: "1–3 hours",
    price: "From ₹800/hour",
    image: "/houseboat/vessels/shikara.jpg",
    description:
      "A handcrafted wooden canoe with cushioned seating and a canopy overhead. Perfect for couples or small groups wanting a quiet, intimate ride through narrow canals.",
  },
  {
    name: "Kayak",
    tagline: "Paddle your own path",
    capacity: "1–2 per kayak",
    duration: "2–4 hours",
    price: "From ₹500/hour",
    image: "/houseboat/vessels/kayak.jpg",
    description:
      "Explore hidden waterways at your own pace. Single and tandem kayaks available — no experience needed, just a sense of adventure.",
  },
  {
    name: "Speedboat",
    tagline: "Cover more water",
    capacity: "4–8 guests",
    duration: "1–2 hours",
    price: "From ₹2,000/hour",
    image: "/houseboat/vessels/speedboat.jpg",
    description:
      "See more of the backwaters in less time. Ideal for transfers between islands, quick sightseeing runs, or anyone who likes a little wind in their hair.",
  },
];

const experiences = [
  {
    title: "Backwater Cruises",
    description:
      "Drift through tranquil palm-lined canals as the world slows down around you. Every bend reveals a new vista.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Onboard Dining",
    description:
      "A private chef prepares fresh catch and local delicacies as you watch the sunset from the upper deck.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "Sunrise on the Water",
    description:
      "Wake up to golden light reflecting off still waters. No alarm, no rush — just the gentle sound of ripples.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "We joined the shared overnight cruise as solo travelers and left as friends. The food, the sunset, the silence at dawn — nothing compares.",
    author: "Priya & Arjun",
    location: "Mumbai",
    trip: "Overnight Stay",
  },
  {
    quote:
      "The food alone was worth the trip. Our chef made the freshest fish curry I've ever tasted, served as we floated past rice paddies. Unforgettable.",
    author: "James Whitfield",
    location: "London",
    trip: "Weekend Voyage",
  },
  {
    quote:
      "We brought three generations of our family. The kids loved fishing off the deck, the grandparents loved the peace. Everyone found their version of paradise.",
    author: "The Menon Family",
    location: "Bangalore",
    trip: "Day Cruise",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <FloatingButtons />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ocean-950">
        <Image
          src="/houseboat/queen/queen-exterior.jpg"
          alt="Vembanad Queen houseboat on the backwaters"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean-950/50" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-ocean-300">
            Shared Houseboat Experiences
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-7xl">
            Share the backwaters.
            <br />
            <span className="text-ocean-300">Share the magic.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Book your spot on a shared luxury houseboat. Meet fellow travelers,
            split the cost, and experience the backwaters without chartering
            an entire vessel.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#sharing"
              className="w-full rounded-full bg-white px-8 py-4 text-base font-semibold text-ocean-950 shadow-lg transition-all hover:bg-ocean-100 hover:shadow-xl sm:w-auto"
            >
              View Shared Cruises
            </a>
            <a
              href="#vessels"
              className="w-full rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              More Ways to Explore
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* Shared Houseboat — Primary Section */}
      <section id="sharing" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-ocean-600">
              Shared Houseboats
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ocean-950 sm:text-4xl">
              Jump aboard. Pay per person.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ocean-700/70">
              No need to book the whole boat. Pick a cruise, grab your spot, and
              share an unforgettable experience with like-minded travelers.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:gap-8 sm:grid-cols-2">
            {sharedHouseboats.map((cruise) => (
              <div
                key={cruise.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ocean-100 bg-white transition-all hover:border-ocean-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cruise.image}
                    alt={cruise.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {cruise.highlight}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {cruise.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{cruise.duration}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-ocean-700/70">
                    {cruise.description}
                  </p>

                  {/* What's included */}
                  <ul className="mt-5 space-y-2.5">
                    {cruise.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ocean-800"
                      >
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Meta + CTA */}
                  <div className="mt-auto flex items-center justify-between border-t border-ocean-100 pt-5 mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ocean-600">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                      {cruise.groupSize}
                    </span>
                    <a
                      href="#book"
                      className="rounded-full bg-ocean-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-800"
                    >
                      Book a Spot
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Queen Gallery */}
          <div className="mx-auto mt-16 max-w-5xl">
            <h3 className="text-center text-xl font-semibold text-ocean-950">
              Life aboard the Vembanad Queen
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {queenGallery.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="bg-ocean-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-ocean-600">
              The Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ocean-950 sm:text-4xl">
              More than a stay. A way of being.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ocean-700/70">
              Every moment on board is designed to immerse you in the rhythm of
              the backwaters.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ocean-50 text-ocean-600 transition-colors group-hover:bg-ocean-600 group-hover:text-white">
                  {exp.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ocean-950">
                  {exp.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ocean-700/70">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Vessel */}
      <section id="vessels" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-ocean-600">
              More Ways to Explore
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ocean-950 sm:text-4xl">
              Choose your vessel
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ocean-700/70">
              Beyond houseboats — explore the backwaters your way.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-3">
            {vessels.map((v) => (
              <div
                key={v.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ocean-100 transition-all hover:border-ocean-200 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-ocean-950">
                    {v.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-ocean-500">
                    {v.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ocean-700/70">
                    {v.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-50 px-3 py-1 text-xs font-medium text-ocean-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                      </svg>
                      {v.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-50 px-3 py-1 text-xs font-medium text-ocean-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      {v.duration}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-ocean-100 pt-5">
                    <span className="text-lg font-bold text-ocean-950">
                      {v.price}
                    </span>
                    <a
                      href="#book"
                      className="rounded-full bg-ocean-950 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ocean-800"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="bg-ocean-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-ocean-300">
              Guest Stories
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don&apos;t take our word for it
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-4 flex gap-1 text-ocean-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="mt-0.5 text-sm text-white/50">
                    {t.location} &middot; {t.trip}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section
        id="book"
        className="relative overflow-hidden bg-gradient-to-br from-ocean-800 via-ocean-700 to-ocean-600 py-20 sm:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(139,189,232,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to set sail?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Tell us your dates, your group size, and the kind of experience
            you&apos;re looking for. We&apos;ll craft the perfect voyage.
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-ocean-300 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ocean-950 transition-colors hover:bg-ocean-100"
            >
              Get in Touch
            </button>
          </div>

          <p className="mt-4 text-xs text-white/40">
            No spam. We&apos;ll reply within 24 hours with availability and
            pricing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-ocean-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <span className="text-xl font-bold text-white">
                HouseBoatCompany
              </span>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Shared luxury houseboat experiences on the backwaters. Because
                the best journeys aren&apos;t measured in miles.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/50">
                <li>Alleppey, Kerala, India</li>
                <li>+91 98765 43210</li>
                <li>hello@houseboatcompany.in</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Hours
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/50">
                <li>Check-in: 12:00 PM</li>
                <li>Check-out: 9:00 AM</li>
                <li>Office: 8 AM – 8 PM IST</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; 2026 HouseBoatCompany. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-white/30 hover:text-white/60">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/30 hover:text-white/60">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/30 hover:text-white/60">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const navLinks = [
  { href: "#sharing", label: "Shared Houseboats" },
  { href: "#vessels", label: "Vessels" },
  { href: "#stories", label: "Guest Stories" },
  { href: "#contact", label: "Contact" },
];
