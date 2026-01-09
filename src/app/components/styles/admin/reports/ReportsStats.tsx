"use client";

import React from "react";
import type { StatsItem } from "@/app/components/styles/admin/reports/mockData";
import { CheckCircleIcon, IconReport, XIcon } from "../Icon";

function toneBox(tone: StatsItem["tone"]) {
  if (tone === "blue") return "bg-blue-50 text-blue-600";
  if (tone === "orange") return "bg-orange-50 text-orange-600";
  if (tone === "indigo") return "bg-indigo-50 text-indigo-600";
  if (tone === "green") return "bg-green-50 text-green-600";
  return "bg-gray-100 text-gray-600";
}

/** Replace these with your real SVGs later (currentColor works) */
function MiniIcon({ iconKey }: { iconKey: StatsItem["iconKey"] }) {
  // ✅ replace these with your real icons from admin/Icon.tsx later
  if (iconKey === "flag") {
    return (
      <IconReport/>
    );
  }

  if (iconKey === "clock") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (iconKey === "eye") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path
          d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (iconKey === "check") {
    return (
      <CheckCircleIcon/>
    );
  }

  // x
  return (
    <XIcon/>
  );
}

export default function ReportsStats({ stats }: { stats: StatsItem[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div
          key={s.key}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div
              className={[
                "h-10 w-10 rounded-lg flex items-center justify-center",
                toneBox(s.tone),
              ].join(" ")}
              aria-hidden="true"
            >
              <MiniIcon iconKey={s.iconKey} />
            </div>

            <div>
              <div className="text-xs text-gray-500">{s.label}</div>
              <div className="text-xl font-semibold text-gray-900">{s.value}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
