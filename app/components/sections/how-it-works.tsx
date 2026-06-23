import { whatsappLink } from "../../lib/contact";
import { steps } from "../../data/home";

export default function HowItWorks() {
  return (
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
                <div
                  key={s.step}
                  className={`relative flex flex-col items-center text-center ${i < steps.length - 1 ? "border-r border-white/10" : ""}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ocean-400 text-sm font-bold text-ocean-400">
                    {s.step}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
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
                href={whatsappLink("Hi! I'd like to book a houseboat experience. Please share availability.")}
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
  );
}
