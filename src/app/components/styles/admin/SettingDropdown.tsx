"use client";

import React from "react";

function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function SettingDropdown({
  label,
  value,
  open,
  options,
  onToggle,
  onSelect,
}: {
  label: string;
  value: string;
  open: boolean;
  options: string[];
  onToggle: () => void;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="relative">
      <div className="text-xs text-gray-500 mb-1">{label}</div>

      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => handleKeyboardActivate(e, onToggle)}
        className="h-10 rounded-md bg-gray-100 px-3 flex items-center justify-between text-sm cursor-pointer"
      >
        {value}
      </div>

      {open ? (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-sm">
          {options.map((o) => (
            <div
              key={o}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(o)}
              onKeyDown={(e) =>
                handleKeyboardActivate(e, () => onSelect(o))
              }
              className="px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer"
            >
              {o}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
