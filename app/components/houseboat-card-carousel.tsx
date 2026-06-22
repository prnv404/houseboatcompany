"use client";

import Image from "next/image";
import { useState, useCallback, useRef } from "react";

interface HouseboatCardCarouselProps {
  images: { src: string; objectPosition?: string }[];
  alt: string;
}

export default function HouseboatCardCarousel({ images, alt }: HouseboatCardCarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const prev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 30) {
      e.preventDefault();
      if (diff > 0) {
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
      } else {
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
      }
    }
  }, [images.length]);

  const goTo = useCallback((e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent(index);
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      className="relative aspect-square sm:aspect-[4/3] overflow-hidden rounded-xl group/carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={`${alt} ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
          style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
          priority={i === 0}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-sm"
            aria-label="Previous image"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M6.5 2L3.5 5L6.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-sm"
            aria-label="Next image"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goTo(e, i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
