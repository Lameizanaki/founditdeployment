"use client";

import React from "react";
import {
  handleKeyboardActivate,
  IconBadge,
  IconBell,
  IconCard,
  IconDollar,
  IconEye,
  IconFile,
  IconGrid,
  IconLink,
  IconLock,
  IconUser,
} from "@/app/components/styles/freelancer_styles/setting/ui";
import type { TabItem, TabKey } from "@/app/components/styles/freelancer_styles/setting/mockData";

function iconByKey(iconKey: TabItem["iconKey"]) {
  switch (iconKey) {
    case "overview":
      return <IconGrid />;   
    case "proposals":
      return <IconFile />;
    case "earning":
      return <IconDollar />;
    case "badge":
      return <IconBadge />;
    case "notification":
      return <IconBell />;
    case "billing":
      return <IconCard />;
    case "account":
      return <IconUser />;
    case "security":
      return <IconLock />;
    case "privacy":
      return <IconEye />;
    case "apps":
      return <IconLink />;
    default:
      return <IconGrid />;
  }
}

export default function Sidebar({
  items,
  activeTab,
  onTabChange,
}: {
  items: TabItem[];
  activeTab: TabKey;
  onTabChange: (k: TabKey) => void;
}) {
  return (
    <div className="w-full">
      <div className="text-xs text-gray-500">Work Settings</div>
      <div className="mt-1 text-sm text-[#4F39F6]">Work Settings &gt; {items.find((i) => i.key === activeTab)?.label}</div>

      {/* Identity Verification highlight box (static) */}
      <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs text-gray-500">Identity</div>
            <div className="text-sm font-semibold text-gray-900">Verification</div>
          </div>
          <div className="px-2 py-1 rounded-md text-[11px] font-medium bg-blue-100 text-blue-700">
            Action Required
          </div>
        </div>

        <div className="mt-2 text-xs text-gray-500">
          Complete your verification to unlock payouts.
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm p-2">
        {items.map((it) => {
          const active = it.key === activeTab;
          const textColor = active ? "text-[#4F39F6]" : "text-gray-900";
          const rowBg = active ? "bg-[#4F39F6]/10" : "bg-transparent";

          return (
            <div
              key={it.key}
              role="button"
              tabIndex={0}
              onClick={() => onTabChange(it.key)}
              onKeyDown={(e) => handleKeyboardActivate(e, () => onTabChange(it.key))}
              className={[
                "w-full flex items-center gap-2 px-3 py-2 rounded-lg transition",
                rowBg,
                active ? "border border-[#4F39F6]/20" : "border border-transparent",
                "hover:bg-gray-50",
              ].join(" ")}
              aria-label={`Open ${it.label}`}
            >
              {/* wrapper controls currentColor for your svg */}
              <span className={["w-5 h-5 flex items-center justify-center ", textColor].join(" ")}>
                {/* SVG: sidebar tab icon - left of label */}
                {iconByKey(it.iconKey)}
              </span>

              <div className={["text-sm font-medium p-2", textColor].join(" ")}>
                {it.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
