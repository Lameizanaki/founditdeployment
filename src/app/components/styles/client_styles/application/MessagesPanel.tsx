// app/components/styles/application/MessagesPanel.tsx
"use client";

import React, { useState } from "react";
import type { MessageRow } from "@/app/components/styles/client_styles/application/mockdata";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";
import Avatar from "@/app/components/styles/client_styles/application/ui/Avatar";

export default function MessagesPanel({ messages }: { messages: MessageRow[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? messages.slice(0, 5) : messages.slice(0, 3);

  return (
    <div className="space-y-3">
      {visible.map((m) => (
        <div key={m.id} className="bg-white border rounded-xl shadow-sm p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 min-w-0">
              <Avatar name={m.name} />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">
                  {m.name}
                </div>
                <div className="text-sm text-gray-600 truncate">{m.preview}</div>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                  {m.unread ? (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-700">
                      Unread
                    </span>
                  ) : null}
                  {m.meta ? <span>{m.meta}</span> : null}
                </div>
              </div>
            </div>

            <div className="shrink-0 text-xs text-gray-500">{m.time}</div>
          </div>
        </div>
      ))}

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setShowAll((v) => !v)}
          onKeyDown={(e) => handleKeyboardActivate(e, () => setShowAll((v) => !v))}
          className="px-4 py-3 text-sm text-gray-700 text-center cursor-pointer select-none transition
                     hover:bg-gray-50 active:scale-[0.99]"
          aria-label="View all messages"
        >
          {showAll ? "Show less" : "View all messages"}
        </div>
      </div>
    </div>
  );
}
