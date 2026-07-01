"use client";

import { useState } from "react";
import Image from "next/image";
import Video from "next-video";
import review1 from "@videos/guest-review-1.mp4";
import review2 from "@videos/guest-review-2.mp4";
import review3 from "@videos/guest-review-3.mp4";
import review4 from "@videos/guest-review-4.mp4";
import { CheckIcon, PlayIcon } from "../icons";

const reviews = [review1, review2, review3, review4];

export default function GuestVideoReviews() {
  // Only one clip mounts the Mux player at a time — posters stay lightweight
  // until a visitor actually taps play.
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="guest-videos" className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ocean-600">
            In Their Own Words
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Guest Video Reviews
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Unscripted moments filmed by travelers aboard.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="w-[85%] shrink-0 snap-start sm:w-auto"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-sm ring-1 ring-gray-200/60">
                {active === i ? (
                  <Video
                    src={review}
                    autoPlay
                    className="h-full w-full"
                    style={{ height: "100%", width: "100%" }}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Play guest video review ${i + 1}`}
                    className="group absolute inset-0 h-full w-full"
                  >
                    {review.poster && (
                      <Image
                        src={review.poster}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder={review.blurDataURL ? "blur" : "empty"}
                        blurDataURL={review.blurDataURL}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <PlayIcon className="ml-0.5 h-5 w-5 text-ocean-700" />
                      </span>
                    </span>
                    <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                      <CheckIcon className="h-3 w-3 text-emerald-300" />
                      Verified guest
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
