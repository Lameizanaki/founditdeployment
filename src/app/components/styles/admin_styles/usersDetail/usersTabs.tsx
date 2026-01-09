"use client";

import React from "react";

export type UserTabKey = "overview" | "freelancer" | "client" | "seller" | "activity" | "financial";

function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function UserTabs({
  value,
  onChange,
}: {
  value: UserTabKey;
  onChange: (v: UserTabKey) => void;
}) {
  const tabs: { key: UserTabKey; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "freelancer", label: "Freelancer" },
    { key: "client", label: "Client" },
    { key: "seller", label: "Seller" },
    { key: "activity", label: "Activity Log" },
    { key: "financial", label: "Financial" },
  ];

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1">
      {tabs.map((t) => {
        const active = value === t.key;
        return (
          <div
            key={t.key}
            role="button"
            tabIndex={0}
            onClick={() => onChange(t.key)}
            onKeyDown={(e) => handleKeyboardActivate(e, () => onChange(t.key))}
            className={[
              "px-3 py-1.5 rounded-full text-sm cursor-pointer select-none",
              active ? "bg-white shadow-sm border border-gray-200 text-gray-900" : "text-gray-700 hover:text-gray-900",
            ].join(" ")}
            aria-label={t.label}
          >
            {t.label}
          </div>
        );
      })}
    </div>
  );
}
