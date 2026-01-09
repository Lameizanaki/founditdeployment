"use client";

import React from "react";

export default function SkillsCard({ skills }: { skills: string[] }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Required Skills</h2>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
