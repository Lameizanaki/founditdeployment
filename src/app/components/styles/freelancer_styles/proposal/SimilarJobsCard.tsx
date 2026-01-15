"use client";

import React from "react";

export type SimilarJobItem = {
  id: number | string;
  title: string;
  priceText: string; // "$4,200" or "$55-$75/hr"
  payType: "Fixed" | "Hourly";
  proposalsCount: number;
};

export default function SimilarJobsCard({
  jobs,
  onOpenJob,
}: {
  jobs: SimilarJobItem[];
  onOpenJob?: (id: SimilarJobItem["id"]) => void;
}) {
  return (
    <div className="bg-white border rounded-xl shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Similar Jobs</h2>
      </div>

      <div className="px-5 py-4 space-y-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            role="button"
            tabIndex={0}
            onClick={() => onOpenJob?.(job.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenJob?.(job.id);
              }
            }}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 transition"
          >
            <div className="text-sm font-semibold text-gray-900 truncate">
              {job.title}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span className="font-medium text-gray-700">{job.priceText}</span>
              <span className="text-gray-300">•</span>
              <span>{job.payType}</span>
              <span className="text-gray-300">•</span>
              <span>{job.proposalsCount} proposals</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
