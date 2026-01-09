"use client";

import React from "react";

type Tone = "blue" | "green" | "purple" | "orange" | "red" | "gray";

function toneClasses(tone: Tone) {
  if (tone === "blue") return "bg-blue-50 text-blue-600";
  if (tone === "green") return "bg-green-50 text-green-600";
  if (tone === "purple") return "bg-fuchsia-50 text-fuchsia-600";
  if (tone === "orange") return "bg-orange-50 text-orange-600";
  if (tone === "red") return "bg-red-50 text-red-600"
  return "bg-gray-100 text-gray-600";
}

export default function SettingSection({
  icon,
  title,
  subtitle,
  tone = "gray",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
        <div
          className={[
            "h-9 w-9 rounded-lg flex items-center justify-center",
            toneClasses(tone),
          ].join(" ")}
        >
          {icon}
        </div>

        <div>
          <div className="font-medium text-gray-900">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
}
