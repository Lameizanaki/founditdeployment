"use client";

import React from "react";
import JobModalShell from "@/app/components/styles/client_styles/application/JobModalShell";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";
import { IconPause } from "./icons";

export default function PauseJobApplicationsModal({
  open,
  activeProposalsCount,
  onClose,
}: {
  open: boolean;
  activeProposalsCount: number;
  onClose: () => void;
}) {
  return (
    <JobModalShell open={open} title="Pause Job Applications" onClose={onClose}>
      <div className="text-sm text-gray-500 -mt-1">
        Temporarily stop receiving new proposals while you review current
        applicants.
      </div>

      {/* blue info card */}
      <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
            i
          </div>

          <div className="min-w-0">
            <div className="text-sm font-semibold text-blue-900">
              What happens when you pause:
            </div>

            <ul className="mt-2 space-y-1 text-sm text-blue-800">
              <li>New freelancers can not submit proposals</li>
              <li>Job will be hidden from search results</li>
              <li>Existing proposals and conversations remain active</li>
              <li>You can resume accepting proposals anytime</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ green info card (count from main code) */}
      <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs shrink-0">
            ✓
          </div>

          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900">
              You currently have {activeProposalsCount} active proposals
            </div>
            <div className="mt-1 text-sm text-gray-500">
              These proposals will remain available for you to review and respond
              to.
            </div>
          </div>
        </div>
      </div>

      {/* actions */}
      <div className="mt-5 flex items-center justify-end gap-2">
        <div
          role="button"
          tabIndex={0}
          onClick={onClose}
          onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
          className="h-9 px-4 rounded-md border bg-white hover:bg-gray-50 text-sm cursor-pointer select-none flex items-center"
          aria-label="Cancel"
        >
          Cancel
        </div>

        {/* static: just closes for now */}
        <div
          role="button"
          tabIndex={0}
          onClick={onClose}
          onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
          className="h-9 px-4 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm cursor-pointer select-none inline-flex items-center gap-2"
          aria-label="Pause Applications"
        >
          
          <IconPause/>
          Pause Applications
        </div>
      </div>
    </JobModalShell>
  );
}
