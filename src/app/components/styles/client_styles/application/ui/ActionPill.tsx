// app/components/styles/application/ui/ActionPill.tsx
"use client";

import React from "react";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function ActionPill({
  label,
  tone = "white",
  onClick,
}: {
  label: React.ReactNode;
  tone?: "green" | "red" | "white" | "gray";
  onClick?: () => void;
}) {
  const cls =
    tone === "green"
      ? "bg-green-600 text-white hover:bg-green-700"
      : tone === "red"
      ? "bg-red-600 text-white hover:bg-red-700"
      : tone === "gray"
      ? "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
      : "bg-white border text-gray-700 hover:bg-gray-50 hover:border-gray-300";

  const onActivate = () => {
    if (onClick) onClick();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        onActivate();
      }}
      onKeyDown={(e) => {
        e.stopPropagation();
        handleKeyboardActivate(e, onActivate);
      }}
      className={cx(
        "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm cursor-pointer select-none transition active:scale-[0.99]",
        cls
      )}
      aria-label={typeof label === "string" ? label : undefined}
    >
      {label}
    </div>
  );
}
