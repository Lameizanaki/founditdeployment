// app/components/styles/application/ApplicationSidebar.tsx
"use client";

import React from "react";
import type { MatchRow } from "@/app/components/styles/client_styles/application/mockdata";
import Avatar from "@/app/components/styles/client_styles/application/ui/Avatar";
import { IconStar } from "@/app/components/styles/client_styles/application/icons";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

export default function ApplicationSidebar({
  matches,
  job,
}: {
  matches: MatchRow[];
  job: { views: number; proposals: number };
}) {
  return (
    <>
      <div className="bg-white border rounded-xl shadow-sm p-4">
        <div className="text-sm font-semibold text-gray-900">Suggested matches</div>

        <div className="mt-3 space-y-3">
          {matches.map((m) => (
            <div key={m.id} className="border rounded-xl p-3">
              <div className="flex items-start gap-3">
                <Avatar name={m.name} size="sm" />
                <div className="min-w-0 w-full">
                  <div className="text-sm font-semibold text-gray-900 truncate">
                    {m.name}
                  </div>
                  <div className="text-xs text-gray-500">{m.subtitle}</div>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 text-yellow-600">
                      <IconStar />
                      <span className="text-gray-800">{m.rating.toFixed(1)}</span>
                    </span>
                    <span>•</span>
                    <span>{m.rate}</span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 px-2 py-1 text-[11px] text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ✅ full width button */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
                    className="mt-3 w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-700 text-center cursor-pointer select-none
                               hover:bg-gray-50 hover:border-gray-300 transition active:scale-[0.99]"
                    aria-label="View profile"
                  >
                    View Profile
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-sm p-4">
        <div className="text-sm font-semibold text-gray-900">Performance</div>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <RowStat label="Views" value={`${job.views}`} />
          <RowStat label="Proposals" value={`${job.proposals}`} />
          <RowStat label="Shortlisted" value={`1`} />
          <div className="pt-2 border-t" />
          <RowStat label="Avg. bid" value={`$983`} />
        </div>
      </div>
    </>
  );
}

function RowStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-500">{label}</div>
      <div className="text-gray-900">{value}</div>
    </div>
  );
}
