// app/components/styles/application/ProposalCard.tsx
"use client";

import React from "react";
import type { Proposal } from "@/app/components/styles/client_styles/application/mockdata";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";
import {
  IconHired,
  IconMessage,
  IconPaperclip,
  IconStar,
} from "@/app/components/styles/client_styles/application/icons";
import ActionPill from "@/app/components/styles/client_styles/application/ui/ActionPill";
import Avatar from "@/app/components/styles/client_styles/application/ui/Avatar";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProposalCard({
  proposal,
  onOpenProposal,
  onToggleShortlist,
  onHireClick,
}: {
  proposal: Proposal;
  onOpenProposal: () => void;
  onToggleShortlist: () => void;
  onHireClick?: (proposalId: string) => void;
}) {
  // ✅ Only the left “profile/intro area” navigates. Nothing else navigates.
  return (
    <div
      className={cx(
        "bg-white border rounded-xl shadow-sm p-4 select-none",
        proposal.shortlisted ? "border-green-200 ring-1 ring-green-200" : ""
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {/* CLICKABLE AREA ONLY (left side) */}
        <div
          role="button"
          tabIndex={0}
          onClick={onOpenProposal}
          onKeyDown={(e) => handleKeyboardActivate(e, onOpenProposal)}
          className="flex items-start gap-3 min-w-0 cursor-pointer rounded-lg p-2 -m-2
                     hover:bg-gray-50 transition"
          aria-label="Open proposal"
        >
          <Avatar name={proposal.name} />
          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {proposal.name}
              {proposal.shortlisted ? (
                <span className="ml-2 inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-700 align-middle">
                  Shortlisted
                </span>
              ) : null}
            </div>
            <div className="text-xs text-gray-500">{proposal.title}</div>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1 text-yellow-600">
                <IconStar />
                <span className="text-gray-800">
                  {proposal.rating.toFixed(1)}
                </span>
                <span>({proposal.reviews})</span>
              </span>
              <span>•</span>
              <span>{proposal.jobsDone} jobs</span>
              <span>•</span>
              <span>{proposal.country}</span>
            </div>
          </div>
        </div>

        {/* Non-clickable bid block */}
        <div className="shrink-0 text-right">
          <div className="text-xs text-gray-500">Bid</div>
          <div className="text-lg font-semibold text-gray-900">
            ${proposal.bid}
          </div>
          <div className="text-xs text-gray-500">{proposal.durationLabel}</div>
        </div>
      </div>

      {/* Non-clickable content (no navigate) */}
      <div
        role="button"
        tabIndex={0}
        onClick={onOpenProposal}
        onKeyDown={(e) => handleKeyboardActivate(e, onOpenProposal)}
        className="flex items-start gap-3 min-w-0 cursor-pointer rounded-lg p-2 -m-2
                     hover:bg-gray-50 transition"
        aria-label="Open proposal"
      >
        <div className="mt-3 text-sm text-gray-700 leading-6">
          {proposal.intro}{" "}
          <span className="text-green-600 hover:underline">Read more</span>
        </div>
      </div>

      <div className="mt-3 rounded-xl bg-gray-50 border p-3 space-y-2">
        {proposal.qa.map((qa, idx) => (
          <div key={idx} className="text-xs text-gray-700">
            <div className="text-gray-500">{qa.q}</div>
            <div>{qa.a}</div>
          </div>
        ))}
      </div>

      {proposal.attachments.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {proposal.attachments.map((a, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => {}}
              onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
              className="inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-xs text-gray-700
                         cursor-pointer select-none hover:bg-gray-50 hover:border-gray-300 transition active:scale-[0.99]"
              aria-label="Attachment"
            >
              <IconPaperclip />
              <span className="truncate max-w-[180px]">{a.name}</span>
              <span className="text-gray-500">({a.size})</span>
            </div>
          ))}
        </div>
      ) : null}

      {/* Actions (stop “card zoom” — actions are separate) */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <ActionPill
          tone="green"
          label={
            <span className="inline-flex items-center gap-2">
              <IconHired />
              Hire
            </span>
          }
          onClick={() => onHireClick?.(proposal.id)}
        />
        <ActionPill
          tone="white"
          label={
            <span className="inline-flex items-center gap-2">
              <IconMessage />
              Message
            </span>
          }
        />

        <ActionPill
          tone={proposal.shortlisted ? "gray" : "white"}
          label={proposal.shortlisted ? "Shortlisted" : "Shortlist"}
          onClick={onToggleShortlist}
        />

        <ActionPill tone="red" label="Decline" />
        <div className="text-xs text-gray-500 ml-auto">
          Submitted 2 hours ago
        </div>
      </div>
    </div>
  );
}
