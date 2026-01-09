// app/components/styles/application/ui/StatusPill.tsx
"use client";

import React from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function StatusPill({
  tone,
  label,
}: {
  tone: "green" | "yellow";
  label: string;
}) {
  const cls =
    tone === "green"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <span className={cx("inline-flex rounded-full px-3 py-1 text-xs font-medium", cls)}>
      {label}
    </span>
  );
}
