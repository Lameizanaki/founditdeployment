// app/components/styles/application/HiredCard.tsx
"use client";

import React from "react";
import type { HiredRow } from "@/app/components/styles/client_styles/application/mockdata";
import {
  IconAlert,
  IconMessage,
  IconMore,
  IconSend,
  IconStar,
} from "@/app/components/styles/client_styles/application/icons";
import Avatar from "@/app/components/styles/client_styles/application/ui/Avatar";
import StatusPill from "@/app/components/styles/client_styles/application/ui/StatusPill";
import Stat from "@/app/components/styles/client_styles/application/ui/Stat";
import ActionPill from "@/app/components/styles/client_styles/application/ui/ActionPill";

export default function HiredCard({ hired }: { hired: HiredRow }) {
  const isPending = hired.status === "pending";

  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <Avatar name={hired.name} />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 truncate">
                {hired.name}
              </div>
              <div className="text-xs text-gray-500">{hired.role}</div>
              <div className="mt-1 text-xs text-gray-500 flex gap-1">
                <IconStar />
                {hired.rating.toFixed(1)} ({hired.reviews}) • {hired.jobsDone}{" "}
                jobs completed
              </div>
            </div>
          </div>

          <StatusPill
            tone={isPending ? "yellow" : "green"}
            label={isPending ? "Pending start" : "Active"}
          />
        </div>

        <div className="mt-3 rounded-xl bg-gray-50 border p-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <Stat label="Contract value" value={hired.contractValue} />
          <Stat label="Timeline" value={hired.timeline} />
          <Stat label={hired.startLabel} value={hired.startValue} />
        </div>

        {isPending ? (
          <div className="mt-3 rounded-xl border border-yellow-200 bg-yellow-50 p-3 flex items-start gap-2">
            <div className="text-yellow-700 mt-0.5">
              <IconAlert />
            </div>
            <div>
              <div className="text-xs font-semibold text-yellow-800">
                Awaiting requirements
              </div>
              <div className="mt-1 text-xs text-yellow-800/90">
                Please provide the initial project requirements to help Sarah
                get started.
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* bottom actions: always 3 buttons */}
      <div className="border-t p-3 flex flex-wrap items-center gap-2">
        {isPending ? (
          <ActionPill tone="green" label={
        <span className="inline-flex items-center gap-2">
          <IconSend />
          Submit requirements
        </span>
      } />
        ) : (
          <ActionPill tone="white" label={
        <span className="inline-flex items-center gap-2">
          <IconMessage />
          Message
        </span>
      } />
        )}

        {isPending ? <ActionPill tone="white" label={
        <span className="inline-flex items-center gap-2">
          <IconMessage />
          Message
        </span>
      } /> : null}

        <div
          role="button"
          tabIndex={0}
          onClick={() => {}}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") e.preventDefault();
          }}
          className="h-9 w-9 rounded-md border bg-white flex items-center justify-center cursor-pointer select-none
                     hover:bg-gray-50 hover:border-gray-300 transition active:scale-[0.99]"
          aria-label="More options"
        >
          <IconMore />
        </div>
      </div>
    </div>
  );
}
