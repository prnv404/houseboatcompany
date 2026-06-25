import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HouseboatGallery from "../../components/houseboat-gallery";
import { CheckIcon, PhoneIcon, StarIcon, WhatsAppIcon } from "../../components/icons";
import { PHONE_NUMBER, whatsappLink } from "../../lib/contact";
import SiteFooter from "../../components/sections/site-footer";
import { privateBoats } from "../../data/home";
import {
  getHouseboatDetail,
  houseboatSlug,
  houseboatSlugs,
  PRIVATE_HIGHLIGHTS,
  PRIVATE_INCLUDED,
  PRIVATE_MENU,
  PRIVATE_POLICIES,
  PRIVATE_ROUTE,
} from "../../data/private-houseboats";

export function generateStaticParams() {
  return houseboatSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const boat = getHouseboatDetail(slug);
  if (!boat) return { title: "Not Found" };
  return {
    title: `${boat.name} — Alleppey HouseBoat Company`,
    description: boat.description,
  };
}

export default async function HouseboatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const boat = getHouseboatDetail(slug);
  if (!boat) notFound();

  const bookingMessage = `Hi! I'd like to book the ${boat.name} (${boat.price}/night). Please share availability and details.`;
  const otherBoats = privateBoats.filter((b) => b.beds !== boat.beds).slice(0, 6);

  return (
    <main className="pb-24 lg:pb-0">
      {/* Back nav */}
      <div className="mx-auto max-w-6xl px-5 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <Link
          href="/#private"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-gray-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to all houseboats
        </Link>
      </div>

      {/* Title */}
      <header className="mx-auto max-w-6xl px-5 pt-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              {boat.name}
            </h1>
            <p className="mt-1.5 text-base text-gray-500 sm:text-lg">{boat.tagline}</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-ocean-50 px-3.5 py-1.5 text-sm font-bold text-ocean-700">
            <StarIcon className="h-4 w-4 fill-ocean-500" />
            5.0
            <span className="font-medium text-ocean-600/70">· {boat.guests} guests</span>
          </div>
        </div>
      </header>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <HouseboatGallery images={boat.images} name={boat.name} />
      </section>

      {/* Quick facts */}
      <div className="mx-auto mt-8 max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-gray-100 sm:grid-cols-4">
          {boat.facts.map((f) => (
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
                <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">{boat.description}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-500">{boat.longDescription}</p>
              </div>

              {/* Layout */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">The boat</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">What&apos;s onboard</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {boat.layout.map((item) => (
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
                  {PRIVATE_HIGHLIGHTS.map((h) => (
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">The journey</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">Cruise route</h2>
                <ol className="mt-5 ml-1 border-l-2 border-dashed border-ocean-200">
                  {PRIVATE_ROUTE.split("→").map((s) => s.trim()).filter(Boolean).map((stop, i) => (
                    <li key={`${stop}-${i}`} className="relative pb-5 pl-6 last:pb-0">
                      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-ocean-500 bg-white" />
                      <p className="text-sm leading-relaxed text-gray-700">{stop}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Menu */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">Dining</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">What&apos;s on the menu</h2>
                <div className="mt-5 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  {PRIVATE_MENU.map((m) => (
                    <div key={m.meal} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-6 sm:p-5">
                      <p className="shrink-0 text-sm font-semibold text-gray-900 sm:w-32">{m.meal}</p>
                      <p className="text-sm leading-relaxed text-gray-500">{m.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good to know */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ocean-600">Good to know</p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-gray-900">Important information</h2>
                <div className="mt-5 rounded-2xl bg-gray-50 p-5 sm:p-6">
                  <ul className="space-y-3">
                    {PRIVATE_POLICIES.map((p) => (
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
            </div>

            {/* Booking sidebar — hidden on mobile (sticky bottom bar covers it) */}
            <div className="hidden lg:col-span-1 lg:block">
              <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/60">
                <div className="border-b border-gray-100 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-3xl font-bold tracking-tight text-gray-900">
                        {boat.price}
                        <span className="text-base font-medium text-gray-400">/night</span>
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        Whole boat · {boat.beds} bedrooms · {boat.guests} guests
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-900">What&apos;s included</h4>
                  <ul className="mt-3 space-y-2.5">
                    {PRIVATE_INCLUDED.map((item) => (
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

      {/* Explore other sizes */}
      <section className="border-t border-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Explore other sizes</h2>
          <p className="mt-1 text-sm text-gray-400">Bigger group, smaller group — pick the boat that fits.</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {otherBoats.map((b) => (
              <Link key={b.beds} href={`/houseboats/${houseboatSlug(b.beds)}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={b.images[0].src}
                    alt={`${b.beds} bedroom houseboat`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 16vw"
                    style={b.images[0].objectPosition ? { objectPosition: b.images[0].objectPosition } : undefined}
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">{b.beds} Bedroom</h3>
                  <p className="text-[11px] text-gray-400">{b.guests} guests</p>
                  <p className="mt-0.5 text-xs font-bold text-gray-900 sm:text-sm">From {b.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Sticky mobile booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-lg lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] text-gray-400">{boat.beds} bedrooms · {boat.guests} guests</p>
            <p className="text-base font-bold leading-tight text-gray-900">
              {boat.price}
              <span className="text-xs font-medium text-gray-400">/night</span>
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
