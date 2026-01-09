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

export default function SettingToggle({
  label,
  desc,
  value,
  onToggle,
}: {
  label: string;
  desc: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border px-4 py-3">
      <div>
        <div className="text-sm font-medium text-gray-900">{label}</div>
        <div className="text-xs text-gray-500">{desc}</div>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => handleKeyboardActivate(e, onToggle)}
        className={[
          "h-5 w-9 rounded-full transition flex items-center",
          value ? "bg-fuchsia-600 justify-end" : "bg-gray-300 justify-start",
        ].join(" ")}
      >
        <div className="h-4 w-4 bg-white rounded-full mx-0.5" />
      </div>
    </div>
  );
}
