"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface GalleryImage {
  src: string;
  objectPosition?: string;
}

interface HouseboatGalleryProps {
  images: GalleryImage[];
  name: string;
}

export default function HouseboatGallery({ images, name }: HouseboatGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const touchStartX = useRef(0);

  const total = images.length;
  const clamp = useCallback((i: number) => (i + total) % total, [total]);
  const go = useCallback((i: number) => setActive(clamp(i)), [clamp]);

  const openAt = useCallback((i: number) => {
    setActive(i);
    setLightbox(true);
  }, []);

  // Lightbox keyboard controls + scroll lock.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") setActive((c) => clamp(c + 1));
      if (e.key === "ArrowLeft") setActive((c) => clamp(c - 1));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, clamp]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(active + (diff > 0 ? 1 : -1));
  };

  if (total === 0) return null;

  const mosaic = images.slice(0, 5);

  return (
    <>
      {/* ---------- Mobile: swipeable single image ---------- */}
      <div className="sm:hidden">
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={() => openAt(active)}
        >
          {images.map((img, i) => (
            <Image
              key={img.src}
              src={img.src}
              alt={`${name} — photo ${i + 1}`}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-0"}`}
              sizes="100vw"
              style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
            />
          ))}
          <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {active + 1} / {total}
          </span>
        </div>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => go(i)}
              aria-label={`View photo ${i + 1}`}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                i === active ? "ring-ocean-500" : "ring-transparent opacity-70"
              }`}
            >
              <Image src={img.src} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Desktop: Airbnb-style mosaic ---------- */}
      <div className="relative hidden gap-2 sm:grid sm:grid-cols-4 sm:grid-rows-2">
        {mosaic.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openAt(i)}
            className={`group relative overflow-hidden ${
              i === 0 ? "col-span-2 row-span-2 rounded-l-3xl" : ""
            } ${i === 2 ? "rounded-tr-3xl" : ""} ${i === 4 ? "rounded-br-3xl" : ""}`}
          >
            <div className={`relative ${i === 0 ? "h-full min-h-[26rem]" : "aspect-[4/3] h-full"}`}>
              <Image
                src={img.src}
                alt={`${name} — photo ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={i === 0 ? "50vw" : "25vw"}
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </div>
          </button>
        ))}

        <button
          onClick={() => openAt(0)}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
          </svg>
          View all {total} photos
        </button>
      </div>

      {/* ---------- Lightbox ---------- */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} photo gallery`}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 text-white sm:px-8">
            <span className="text-sm font-medium tabular-nums">
              {active + 1} / {total}
            </span>
            <button
              onClick={() => setLightbox(false)}
              aria-label="Close gallery"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex flex-1 items-center justify-center px-4 sm:px-16"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative h-full w-full max-w-5xl">
              <Image
                key={images[active].src}
                src={images[active].src}
                alt={`${name} — photo ${active + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={() => go(active - 1)}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={() => go(active + 1)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center gap-2 overflow-x-auto px-4 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActive(i)}
                aria-label={`View photo ${i + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                  i === active ? "ring-white" : "ring-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
