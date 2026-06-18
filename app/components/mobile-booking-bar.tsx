"use client";

export default function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-lg sm:hidden">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs text-gray-400">Shared houseboat from</p>
          <p className="text-lg font-bold text-gray-900">
            ₹5,000<span className="text-xs font-normal text-gray-400">/person</span>
          </p>
        </div>
        <a
          href="https://wa.me/916282477940"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
