import Image from "next/image";
import { PhoneIcon } from "../icons";
import { PHONE_DISPLAY, PHONE_NUMBER, whatsappLink } from "../../lib/contact";

export default function BookingCta() {
  return (
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
            href={`tel:${PHONE_NUMBER}`}
            className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 ring-1 ring-white/20 transition-colors hover:bg-white/15"
          >
            <PhoneIcon className="h-5 w-5 text-ocean-400" />
            <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">{PHONE_DISPLAY}</span>
          </a>
          <div className="mx-auto mt-6 flex max-w-xs gap-3">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ocean-900 transition-colors hover:bg-ocean-50"
            >
              Call Now
            </a>
            <a
              href={whatsappLink("Hi! I'd like to book a houseboat experience. Please share availability.")}
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
  );
}
