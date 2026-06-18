"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#sharing", label: "Shared Houseboats" },
  { href: "#vessels", label: "Vessels" },
  { href: "#stories", label: "Guest Stories" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ocean-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            HouseBoatCompany
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ocean-950 transition-colors hover:bg-ocean-100"
          >
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-ocean-950/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-ocean-950 transition-colors hover:bg-ocean-100"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
