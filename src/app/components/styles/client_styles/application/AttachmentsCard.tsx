"use client";

import React from "react";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

export default function AttachmentsCard({ attachments }: { attachments: string[] }) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Attachments</h2>
      </div>

      <div className="px-5 py-4 space-y-3">
        {attachments.map((file) => (
          <div
            key={file}
            className="flex items-center justify-between gap-3 rounded-md border border-gray-200 bg-gray-50 px-4 py-3"
          >
            <p className="text-sm text-gray-700">{file}</p>

            <div
              role="button"
              tabIndex={0}
              onClick={() => {}}
              onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 cursor-pointer select-none hover:bg-gray-50"
              aria-label={`Open ${file}`}
              title="Open"
            >
              <IconExternal />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M14 4h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L20 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
