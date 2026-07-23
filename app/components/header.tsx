"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#sharing", label: "Experiences" },
  { href: "/#vessels", label: "Vessels" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Alleppey House Boat Company"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-sm font-bold tracking-tight text-gray-900 sm:text-lg">
            Alleppey HouseBoat Company
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/#book"
            className="rounded-full bg-ocean-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
          >
            Book Online
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 md:hidden"
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
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/#book"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-ocean-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
            >
              Book Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
