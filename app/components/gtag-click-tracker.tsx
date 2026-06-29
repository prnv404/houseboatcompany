"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GtagClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (href.startsWith("https://wa.me/") || href.startsWith("tel:")) {
        window.gtag?.("event", "conversion", {
          send_to: "AW-18106309279/GeRvCLurvcccEJ-14blD",
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
