"use client";

import React, { useEffect, useRef, useState } from "react";
import { handleKeyboardActivate } from "@/app/components/styles/admin_styles/reports/utils";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="text-gray-400">
      <path
        d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 21l-4.3-4.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="text-gray-500">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dropdown({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <div className="text-xs text-gray-500 mb-1">{label}</div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen((p) => !p)}
        onKeyDown={(e) => handleKeyboardActivate(e, () => setOpen((p) => !p))}
        className="h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 flex items-center justify-between cursor-pointer select-none hover:bg-gray-100"
        aria-label={label}
      >
        <div className="text-sm text-gray-900">{value}</div>
        <ChevronDown />
      </div>

      {open ? (
        <div className="absolute z-20 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-sm overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(false)}
              onKeyDown={(e) => handleKeyboardActivate(e, () => setOpen(false))}
              className="px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ReportsFilters() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
        <div className="md:col-span-1">
          <div className="text-xs text-gray-500 mb-1">Search</div>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              className="h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
              placeholder="Search reports..."
              aria-label="Search reports"
            />
          </div>
        </div>

        <Dropdown label="Type" value="All Types" options={["All Types", "Product", "Review", "Message"]} />
        <Dropdown label="Status" value="All Status" options={["All Status", "Pending", "Reviewed", "Resolved", "Dismissed"]} />
      </div>
    </section>
  );
}
