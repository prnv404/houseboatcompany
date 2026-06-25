"use client";

import { useState } from "react";
import { overnightPackages } from "../../data/overnight-packages";
import { CheckIcon, WhatsAppIcon, PhoneIcon } from "../icons";
import { PHONE_NUMBER, whatsappLink } from "../../lib/contact";

export default function OvernightPackages() {
  const [activeTab, setActiveTab] = useState<string>("sharing");
  const pkg = overnightPackages.find((p) => p.id === activeTab)!;

  return (
    <section id="overnight-packages" className="bg-gray-50 py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Overnight Package Details
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-gray-400">
            Everything you need to know about your overnight houseboat cruise in
            Alleppey
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-6 flex max-w-md gap-2 sm:mt-8">
          {overnightPackages.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`flex-1 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                activeTab === p.id
                  ? "bg-ocean-600 text-white"
                  : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
              }`}
            >
              {p.id === "sharing" ? "Sharing Houseboat" : "Private Houseboat"}
            </button>
          ))}
        </div>

        {/* Package card */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 sm:mt-8">
          {/* Header */}
          <div className="border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {pkg.tagline}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full ${pkg.badgeColor} px-3 py-1 text-[11px] font-semibold text-white`}
              >
                {pkg.badge}
              </span>
            </div>

            {/* Quick facts */}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              <span>
                <span className="font-medium text-gray-900">Check-in:</span>{" "}
                {pkg.checkIn}
              </span>
              <span>
                <span className="font-medium text-gray-900">Check-out:</span>{" "}
                {pkg.checkOut}
              </span>
            </div>
          </div>

          {/* AC & Child policy */}
          <div className="grid gap-px border-b border-gray-100 bg-gray-100 sm:grid-cols-2">
            <div className="bg-white px-5 py-4 sm:px-8">
              <h4 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                Air Conditioning
              </h4>
              <p className="mt-1 text-sm text-gray-700">{pkg.acDetails}</p>
            </div>
            <div className="bg-white px-5 py-4 sm:px-8">
              <h4 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                Child Policy
              </h4>
              <p className="mt-1 text-sm text-gray-700">{pkg.childPolicy}</p>
            </div>
          </div>

          {/* Menu */}
          <div className="border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              Houseboat Menu
            </h4>
            <div className="mt-3 space-y-3">
              {pkg.menu.map((meal) => (
                <div key={meal.label} className="flex gap-3">
                  <span className="w-24 shrink-0 text-xs font-semibold text-ocean-600 sm:w-28 sm:text-sm">
                    {meal.label}
                  </span>
                  <span className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {meal.items}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Route */}
          <div className="border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              Cruise Route
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
              {pkg.route}
            </p>
          </div>

          {/* About the houseboat */}
          <div className="border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              About the Houseboat
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
              {pkg.aboutHouseboat}
            </p>
          </div>

          {/* Other details */}
          <div className="border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
            <h4 className="text-sm font-bold text-gray-900 sm:text-base">
              Important Details
            </h4>
            <ul className="mt-3 space-y-2">
              {pkg.otherDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean-600" />
                  <span className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 px-5 py-5 sm:px-8 sm:py-6">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
              aria-label="Call to book"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink(
                `Hi! I'd like to book the ${pkg.name}. Please share availability and pricing.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ocean-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
