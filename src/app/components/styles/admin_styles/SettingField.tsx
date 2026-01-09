"use client";

import React from "react";

export default function SettingField({
  label,
  placeholder,
  rightSuffix,
  leftPrefix,
}: {
  label: string;
  placeholder: string;
  rightSuffix?: string; 
  leftPrefix?: string; 
}) {
  return (
    <div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>

      <div className="relative">
        {leftPrefix ? (
          <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-400 pointer-events-none">
            {leftPrefix}
          </div>
        ) : null}

        <input
          className={[
            "h-10 w-full rounded-md border border-gray-200 bg-gray-50 text-sm text-gray-900",
            "outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-fuchsia-600",
            leftPrefix ? "pl-8" : "pl-3",
            rightSuffix ? "pr-10" : "pr-3",
          ].join(" ")}
          placeholder={placeholder}
          aria-label={label}
        />

        {rightSuffix ? (
          <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-400 pointer-events-none">
            {rightSuffix}
          </div>
        ) : null}
      </div>
    </div>
  );
}
