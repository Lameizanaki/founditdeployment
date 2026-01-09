// app/components/styles/application/TabsBar.tsx
"use client";

import React from "react";
import type { TabKey } from "@/app/components/styles/client_styles/application/mockdata";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function TabPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => handleKeyboardActivate(e, onClick)}
      className={cx(
        "px-4 py-2 rounded-xl text-sm cursor-pointer select-none transition",
        active ? "bg-white border shadow-sm text-gray-900" : "text-gray-700 hover:bg-gray-200"
      )}
      aria-label={label}
    >
      {label}
    </div>
  );
}

export default function TabsBar({
  tab,
  onChange,
}: {
  tab: TabKey;
  onChange: (t: TabKey) => void;
}) {
  return (
    <div className="rounded-xl bg-gray-100 p-1 inline-flex gap-1">
      <TabPill
        active={tab === "proposals"}
        label="Proposals (3)"
        onClick={() => onChange("proposals")}
      />
      <TabPill
        active={tab === "messages"}
        label="Messages"
        onClick={() => onChange("messages")}
      />
      <TabPill
        active={tab === "hired"}
        label="Hired"
        onClick={() => onChange("hired")}
      />
    </div>
  );
}
