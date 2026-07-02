"use client";

import dynamic from "next/dynamic";
import "react-google-reviews/dist/index.css";
import { GoogleIcon, StarRating } from "../icons";

// Loaded client-side only: the widget fetches reviews from Featurable at runtime,
// and this keeps it out of the server bundle / initial render (below the fold).
const ReactGoogleReviews = dynamic(
  () => import("react-google-reviews").then((mod) => mod.ReactGoogleReviews),
  { ssr: false },
);

// Public widget id from your Featurable account (safe to expose).
const FEATURABLE_WIDGET_ID = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;

export default function GoogleReviews() {
  // Until the widget id is configured, render nothing so the page never shows an
  // empty shell — mirrors the existing reviews section's graceful fallback.
  if (!FEATURABLE_WIDGET_ID) return null;

  return (
    <section id="google-reviews" className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Reviews from Google
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Straight from our Google Business Profile
            </p>
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

        <ReactGoogleReviews
          layout="carousel"
          featurableId={FEATURABLE_WIDGET_ID}
          theme="light"
          maxCharacters={220}
          structuredData
        />
      </div>
    </section>
  );
}
