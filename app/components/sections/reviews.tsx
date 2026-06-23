import { GoogleIcon, StarRating } from "../icons";
import { reviews } from "../../data/home";

export default function Reviews() {
  return (
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
            <GoogleIcon className="h-6 w-6" />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-gray-900">5.0</span>
                <StarRating className="h-3.5 w-3.5" />
              </div>
              <p className="text-[11px] text-gray-400">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {reviews.map((review) => (
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
                <StarRating className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
  );
}
