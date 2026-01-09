"use client";

import React, { useMemo, useState } from "react";
import JobModalShell from "@/app/components/styles/client_styles/application/JobModalShell";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

export default function CloseJobPostingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");

  const canClose = useMemo(() => reason.trim().length > 0, [reason]);

  return (
    <JobModalShell open={open} title="Close Job Posting" onClose={onClose}>
      <div className="text-sm text-gray-500 -mt-1">
        Once you close this job, you will not be able to receive new proposals.
        Existing conversations with freelancers will remain accessible.
      </div>

      {/* Reason input (required) */}
      <div className="mt-4">
        <div className="text-sm font-medium text-gray-900">
          Reason for closing <span className="text-red-500">*</span>
        </div>

        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Type a reason..."
          className="mt-2 h-10 w-full rounded-md border bg-gray-50 px-3 text-sm text-gray-900 placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>

      {/* Feedback optional */}
      <div className="mt-4">
        <div className="text-sm font-medium text-gray-900">
          Additional feedback <span className="text-gray-400">(optional)</span>
        </div>

        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Help us improve by sharing more details about your decision..."
          className="mt-2 w-full min-h-[96px] rounded-md border bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-green-200"
        />
      </div>

      {/* warning box */}
      <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
        <div className="flex items-start gap-3">
          <div className="h-6 w-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs shrink-0">
            !
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-yellow-900">
              What happens when you close a job:
            </div>
            <ul className="mt-2 space-y-1 text-sm text-yellow-800">
              <li>New freelancers can not submit proposals</li>
              <li>The job will not appear in search results</li>
              <li>Active conversations remain accessible</li>
              <li>You can still hire from existing proposals</li>
            </ul>
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

        {/* enabled only when reason has text */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            if (!canClose) return;
            onClose(); // static for now
          }}
          onKeyDown={(e) =>
            handleKeyboardActivate(e, () => {
              if (!canClose) return;
              onClose();
            })
          }
          className={[
            "h-9 px-4 rounded-md text-sm select-none inline-flex items-center gap-2 transition active:scale-[0.99]",
            canClose
              ? "bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              : "bg-red-200 text-white/80 cursor-not-allowed",
          ].join(" ")}
          aria-label="Close Job"
        >
          ✕ Close Job
        </div>
      </div>
    </JobModalShell>
  );
}
