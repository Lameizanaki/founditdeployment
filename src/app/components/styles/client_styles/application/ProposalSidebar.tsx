"use client";

import React from "react";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

import {
  IconMessage,
  IconHired,
  IconStar,
  IconLightning,
  IconHuman,
  IconShield,
} from "@/app/components/styles/client_styles/application/icons";

export default function ProposalSidebar({
  bid,
  match,
}: {
  bid: {
    fixedPrice: number;
    projectCost: number;
    platformFee: number;
    freelancerReceives: number;
    start: string;
    delivery: string;
  };
  match: {
    score: number;
    bullets: { title: string; sub: string; icon: "star" | "repeat" | "clock" | "shield" }[];
    topSkills: string[];
  };
}) {
  return (
    <div className="lg:sticky lg:top-0 lg:pt-6 space-y-4">
      {/* Bid Summary */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-gray-900">Bid Summary</p>
        </div>

        <div className="px-4 pb-4">
          <div className="space-y-2 text-xs">
            <Row label="Fixed Price" value={`$${bid.fixedPrice}`} strong />
            <Row label="Project cost" value={`$${bid.projectCost}`} />
            <Row label="Platform fee (5%)" value={`-$${bid.platformFee}`} danger />
            <Row label="Freelancer receives" value={`$${bid.freelancerReceives}`} strong />
          </div>

          <div className="mt-3 rounded-lg bg-gray-50 border border-gray-200 p-3 text-xs">
            <Row label="Start availability" value={bid.start} />
            <Row label="Delivery time" value={bid.delivery} />
          </div>

          {/* Hire + Message under it (your request) */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => {}}
            onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
            className="mt-3 h-10 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm cursor-pointer select-none flex items-center justify-center"
            aria-label="Hire Sarah"
          >
            Hire Sarah
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={() => {}}
            onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
            className="mt-2 h-10 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-sm cursor-pointer select-none flex items-center justify-center gap-2"
            aria-label="Message"
          >
            <IconMessage />
            Message
          </div>
        </div>
      </div>

      {/* Match Score (icons included) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-gray-900">Match Score</p>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Skills match</span>
            <span className="text-gray-900 font-semibold">{match.score}%</span>
          </div>

          <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: `${match.score}%` }} />
          </div>

          <div className="mt-4 space-y-3">
            {match.bullets.map((b) => (
              <div key={b.title} className="flex items-start gap-2">
                <span className=" text-green-700 inline-flex">
                  {b.icon === "star" ? <IconStar /> : null}
                  {b.icon === "repeat" ? <IconHuman /> : null}
                  {b.icon === "clock" ? <IconLightning /> : null}
                  {b.icon === "shield" ? <IconShield /> : null}
                  {/* fallback if any icon missing */}
                  {!b.icon ? <IconHired /> : null}
                </span>
                <div>
                  <p className="text-xs font-semibold text-gray-900">{b.title}</p>
                  <p className="text-[11px] text-gray-500">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top skills */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-gray-900">Top skills</p>
        </div>

        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {match.topSkills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  strong,
  danger,
}: {
  label: string;
  value: string;
  strong?: boolean;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-gray-500">{label}</span>
      <span
        className={[
          strong ? "font-semibold text-gray-900" : "text-gray-700",
          danger ? "text-red-600" : "",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}
