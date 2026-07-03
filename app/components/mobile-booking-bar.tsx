"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { whatsappLink } from "../lib/contact";

export default function MobileBookingBar() {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const whatsappText = date
    ? `Hi! I'd like to book a shared houseboat on ${format(date, "MMM d, yyyy")}. Please share availability.`
    : "Hi! I'd like to book a shared houseboat. Please share availability.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-lg sm:hidden">
      <div className="flex items-center gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="flex flex-1 flex-col items-start rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
            <span className="text-[10px] text-gray-400">Travel Date</span>
            <span className="text-sm font-semibold text-gray-900">
              {date ? format(date, "MMM d") : "Select date"}
            </span>
          </PopoverTrigger>
          <PopoverContent align="start" side="top" sideOffset={8} className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => {
                setDate(d);
                setOpen(false);
              }}
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
            />
          </PopoverContent>
        </Popover>
        <a
          href={whatsappLink(whatsappText)}
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
