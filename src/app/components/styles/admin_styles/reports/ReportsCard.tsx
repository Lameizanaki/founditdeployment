"use client";

import React from "react";
import type { ReportItem } from "@/app/components/styles/admin/reports/mockData";
import { handleKeyboardActivate } from "@/app/components/styles/admin/reports/utils";
import { CheckCircleIcon, IconCube, IconEye, XIcon } from "../Icon";
import { IconMessage } from "@/app/components/styles/client_styles/application/icons";

function pillSeverity(sev: ReportItem["severity"]) {
  if (sev === "High") return "bg-orange-100 text-orange-700";
  if (sev === "Medium") return "bg-orange-100 text-orange-700";
  return "bg-gray-100 text-gray-700";
}

function pillStatus(status: ReportItem["status"]) {
  if (status === "Pending") return "bg-orange-100 text-orange-700";
  if (status === "Reviewed") return "bg-blue-100 text-blue-700";
  if (status === "Resolved") return "bg-green-100 text-green-700";
  return "bg-gray-100 text-gray-700";
}

/** Placeholder icon box at left of each report card */
function LeftIcon({ iconKey }: { iconKey: "product" | "review" | "message" }) {
  const boxTone =
    iconKey === "product"
      ? "bg-rose-50 text-rose-600"
      : iconKey === "review"
      ? "bg-rose-50 text-rose-600"
      : "bg-rose-50 text-rose-600";

  function IconSvg() {
    // ✅ Replace each svg with your Figma svg later (keep stroke="currentColor")
    if (iconKey === "product") {
      return (
        <IconCube/>
      );
    }

    if (iconKey === "review") {
      return (
        <IconMessage/>
      );
    }

    // message
    return (
      <IconMessage/>
    );
  }

  return (
    <div className={["h-10 w-10 rounded-lg flex items-center justify-center", boxTone].join(" ")}>
      <IconSvg />
    </div>
  );
}

/** Placeholder icons for buttons (replace later) */




export default function ReportCard({
  report,
  onReview,
  onResolve,
  onDismiss,
}: {
  report: ReportItem;
  onReview: () => void;
  onResolve: () => void;
  onDismiss: () => void;
}) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <div className="flex items-start gap-4">
        <LeftIcon iconKey={report.iconKey} />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-base font-medium text-gray-900">{report.title}</div>

            <span className={["inline-flex items-center rounded-full px-2 py-0.5 text-xs", pillSeverity(report.severity)].join(" ")}>
              {report.severity}
            </span>

            <span className={["inline-flex items-center rounded-full px-2 py-0.5 text-xs", pillStatus(report.status)].join(" ")}>
              {report.status}
            </span>
          </div>

          <div className="mt-2 text-sm text-gray-500 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <span className="text-gray-700">{report.type}</span>
            </span>
            <span className="text-gray-300">•</span>
            <span>Reported by: {report.reportedBy}</span>
            <span className="text-gray-300">•</span>
            <span>{report.age}</span>
          </div>

          <div className="mt-3 text-sm">
            <span className="text-red-600 font-medium">Reason:</span>{" "}
            <span className="text-gray-900">{report.reasonTitle}</span>
          </div>

          <div className="mt-1 text-sm text-gray-500">{report.description}</div>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Review */}
          <div
            role="button"
            tabIndex={0}
            onClick={onReview}
            onKeyDown={(e) => handleKeyboardActivate(e, onReview)}
            className="h-10 rounded-md border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer select-none flex items-center justify-center gap-2 text-sm text-gray-900"
            aria-label="Review report"
          >
            <IconEye />
            Review
          </div>

          {/* Resolve (purple big) */}
          <div
            role="button"
            tabIndex={0}
            onClick={onResolve}
            onKeyDown={(e) => handleKeyboardActivate(e, onResolve)}
            className="h-10 rounded-md bg-fuchsia-600 hover:bg-fuchsia-700 cursor-pointer select-none flex items-center justify-center gap-2 text-sm text-white"
            aria-label="Resolve report"
          >
            <CheckCircleIcon />
            Resolve
          </div>

          {/* Dismiss */}
          <div
            role="button"
            tabIndex={0}
            onClick={onDismiss}
            onKeyDown={(e) => handleKeyboardActivate(e, onDismiss)}
            className="h-10 rounded-md border border-gray-200 bg-white hover:bg-gray-50 cursor-pointer select-none flex items-center justify-center gap-2 text-sm text-red-600"
            aria-label="Dismiss report"
          >
            <XIcon />
            Dismiss
          </div>
        </div>
      </div>
    </article>
  );
}
