"use client";

import React from "react";

export default function ProjectDetailsCard({
  details,
}: {
  details: { label: string; value: string }[];
}) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Project Details</h2>
      </div>

      <div className="px-5 py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.label} className="text-sm">
              <p className="text-xs text-gray-500">{d.label}:</p>
              <p className="mt-0.5 text-sm text-gray-900">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
