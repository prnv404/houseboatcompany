import Image from "next/image";
import HeroDatePicker from "../hero-date-picker";
import { CalendarIcon, LocationIcon, UsersIcon } from "../icons";

export default function Hero() {
  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[3/4] sm:aspect-[2/1]">
            <Image
              src="/houseboat/14-bed/exterior.jpeg"
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
                  <CalendarIcon className="h-3.5 w-3.5" />
                  Travel Dates
                </label>
                <HeroDatePicker />
              </div>
              <div className="flex-1">
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <UsersIcon className="h-3.5 w-3.5" />
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
                  <LocationIcon className="h-3.5 w-3.5" />
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
  );
}
