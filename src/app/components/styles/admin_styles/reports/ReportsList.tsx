"use client";

import React from "react";
import type { ReportItem } from "@/app/components/styles/admin_styles/reports/mockData";
import ReportCard from "@/app/components/styles/admin_styles/reports/ReportsCard";

export default function ReportsList({
  reports,
  onReview,
  onResolve,
  onDismiss,
}: {
  reports: ReportItem[];
  onReview: (r: ReportItem) => void;
  onResolve: (r: ReportItem) => void;
  onDismiss: (r: ReportItem) => void;
}) {
  return (
    <section className="space-y-6">
      {reports.map((r) => (
        <ReportCard
          key={r.id}
          report={r}
          onReview={() => onReview(r)}
          onResolve={() => onResolve(r)}
          onDismiss={() => onDismiss(r)}
        />
      ))}
    </section>
  );
}
