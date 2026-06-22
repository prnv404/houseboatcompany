"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HeroDatePicker() {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-left text-sm text-gray-700 outline-none hover:border-gray-300 focus:border-ocean-400 focus:ring-1 focus:ring-ocean-400"
      >
        {date ? format(date, "MMM d, yyyy") : "Select date"}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
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
  );
}
