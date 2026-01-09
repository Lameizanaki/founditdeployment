// app/components/styles/application/ui/Avatar.tsx
"use client";

import React from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function Avatar({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md";
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  const box = size === "sm" ? "h-10 w-10 text-xs" : "h-12 w-12 text-sm";

  return (
    <div
      className={cx(
        "rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold shrink-0",
        box
      )}
      aria-label={`Avatar ${name}`}
    >
      {initials || "U"}
    </div>
  );
}
