"use client";

import React from "react";
import ModalOverlay from "@/app/components/styles/admin/reports/ModalOverlay";
import type { ReportItem } from "@/app/components/styles/admin/reports/mockData";
import { handleKeyboardActivate } from "@/app/components/styles/admin/reports/utils";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="text-gray-500">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EyeIconBlue() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="text-white">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function ReviewReportModal({
  report,
  onClose,
}: {
  report: ReportItem;
  onClose: () => void;
}) {
  return (
    <ModalOverlay onClose={onClose}>
      <div className="w-full max-w-[640px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <div className="text-lg font-semibold text-gray-900">Review Report</div>
            <div className="text-sm text-gray-500">Review this report and mark it as reviewed</div>
          </div>

          <div
            role="button"
            tabIndex={0}
            onClick={onClose}
            onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
            className="h-9 w-9 rounded-md hover:bg-gray-50 flex items-center justify-center cursor-pointer select-none"
            aria-label="Close modal"
          >
            <CloseIcon />
          </div>
        </div>

        <div className="p-6">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <div className="text-xs text-gray-500">Reported Item</div>
            <div className="text-sm font-medium text-gray-900">{report.title}</div>

            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500">Type</div>
                <div className="text-sm text-gray-900">{report.type}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Severity</div>
                <span className="inline-flex mt-1 rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-700">
                  {report.severity}
                </span>
              </div>
            </div>

            <div className="mt-3">
              <div className="text-xs text-gray-500">Reported By</div>
              <div className="text-sm text-gray-900">{report.reportedBy}</div>
            </div>

            <div className="mt-3">
              <div className="text-xs text-gray-500">Reason</div>
              <div className="text-sm text-red-600">{report.reasonTitle}</div>
            </div>

            <div className="mt-3">
              <div className="text-xs text-gray-500">Description</div>
              <div className="text-sm text-gray-700">{report.description}</div>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-sm font-medium text-gray-900">Review Notes (Optional)</div>
            <textarea
              className="mt-2 w-full min-h-[92px] rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Add notes about your review..."
              aria-label="Review notes"
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <div
              role="button"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
              className="h-10 px-4 rounded-md border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer select-none flex items-center justify-center text-sm"
            >
              Cancel
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
              className="h-10 px-4 rounded-md bg-blue-600 hover:bg-blue-700 cursor-pointer select-none flex items-center justify-center gap-2 text-sm text-white"
              aria-label="Mark as reviewed"
            >
              <EyeIconBlue />
              Mark as Reviewed
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}
