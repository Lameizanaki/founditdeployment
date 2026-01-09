"use client";

import React from "react";

export default function JobSidebar({
  budget,
}: {
  budget: {
    amount: string;
    type: string;
    competitionLabel: string;
    proposalsText: string;
    competitionPercent: number;
  };
}) {
  return (
    <>
      <div className="bg-white border rounded-xl shadow-sm">
        <div className="px-5 py-4">
          <p className="text-xl font-semibold text-gray-900">{budget.amount}</p>
          <p className="mt-1 text-xs text-gray-500">{budget.type}</p>
        </div>

        <div className="border-t border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Competition:</span>
            <span className="text-orange-600">{budget.competitionLabel}</span>
          </div>

          <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: `${budget.competitionPercent}%` }} />
          </div>

          <p className="mt-2 text-xs text-gray-500">{budget.proposalsText}</p>
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-sm">
        <div className="px-3 py-4 flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-green-700">
            <IconCheck />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Payment Verified</p>
            <p className="mt-1 text-xs text-gray-500">
              This client has verified payment method on file
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
