import Link from "next/link";
import HouseboatCardCarousel from "../houseboat-card-carousel";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "../icons";
import { PHONE_NUMBER, whatsappLink } from "../../lib/contact";
import { sharedExperiences, sharedValueProps } from "../../data/home";

export default function SharedHouseboat() {
  return (
    <section id="sharing" className="pt-10 pb-10 sm:pt-16 sm:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Just Book a Room, Not the Entire Boat.
          </h2>
          <p className="mx-auto mt-3 hidden max-w-lg text-sm leading-relaxed text-gray-400 sm:block">
            Starting at ₹5,000 for two — book your private cabin on a shared houseboat and cruise the backwaters together.
          </p>
        </div>

        {/* Value props */}
        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-8">
          {sharedValueProps.map((label) => (
            <span key={label} className="flex items-center gap-2 text-sm text-gray-500">
              <CheckIcon className="h-4 w-4 text-ocean-600" />
              {label}
            </span>
          ))}
        </div>

        {/* Shared experience cards */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:mt-10 sm:gap-6">
          {sharedExperiences.map((card) => (
            <div key={card.name} className="group">
              <Link href={`/experiences/${card.slug}`} className="block">
                <HouseboatCardCarousel images={card.images} alt={card.name} />
              </Link>

              <div className="mt-3 sm:mt-4">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">{card.name}</h3>
                <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">{card.duration}</p>
                <p className="mt-1 text-sm font-bold text-gray-900 sm:text-base">
                  From <span>{card.price}</span>
                </p>

                {/* Booking buttons */}
                <div className="mt-3 flex gap-2">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
                    aria-label="Call to book"
                  >
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={whatsappLink(
                      `Hi! I'd like to book a shared houseboat — ${card.name} (${card.duration}). Please share availability and details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ocean-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-ocean-700 sm:text-sm"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
