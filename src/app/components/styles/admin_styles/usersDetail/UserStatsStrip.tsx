"use client";

import React from "react";

export default function UserStatsStrip() {
  const cards = [
    { title: "Total Earned", value: "$12,300", sub: "From freelance work", tone: "green", icon: <IconDollar /> },
    { title: "Total Spent", value: "$4,500", sub: "On hiring & purchases", tone: "blue", icon: <IconDollar /> },
    { title: "Overall Rating", value: "4.9", sub: "Across all roles", tone: "amber", icon: <IconStar /> , extra: "(47)"},
    { title: "Pending Payments", value: "$850", sub: "Awaiting processing", tone: "orange", icon: <IconWarn /> },
  ];

  function toneIcon(tone: string) {
    if (tone === "green") return "text-emerald-600";
    if (tone === "blue") return "text-blue-600";
    if (tone === "amber") return "text-amber-500";
    return "text-orange-500";
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <div className="flex items-start justify-between">
            <div className="text-sm text-gray-500">{c.title}</div>
            <div className={toneIcon(c.tone)} aria-hidden="true">
              {c.icon}
            </div>
          </div>

          <div className="mt-3 text-2xl font-semibold text-gray-900">
            {c.value} {c.extra ? <span className="text-sm font-medium text-gray-500">{c.extra}</span> : null}
          </div>

          <div className="mt-2 text-xs text-gray-500">{c.sub}</div>
        </div>
      ))}
    </div>
  );
}

function IconDollar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M17 7a4 4 0 0 0-4-2H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a4 4 0 0 1-4-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.8 5.7 6.3.9-4.55 4.4 1.08 6.28L12 17.9 6.37 20.78l1.08-6.28L2.9 10.1l6.3-.9L12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconWarn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 22 20H2L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
