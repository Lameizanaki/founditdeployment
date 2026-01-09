"use client";

import React from "react";

export default function FinancialTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card title="Income Breakdown">
        <Rows
          items={[
            { label: "Freelance Earnings", value: <span className="text-emerald-600 font-medium">$12,300</span> },
            { label: "Seller Revenue", value: <span className="text-emerald-600 font-medium">$7,800</span> },
            { label: "Pending Payments", value: <span className="text-orange-500 font-medium">$850</span> },
            { divider: true },
            { label: "Total Income", value: <span className="text-emerald-600 font-semibold">$20,950</span> },
          ]}
        />
      </Card>

      <Card title="Expense Breakdown">
        <Rows
          items={[
            { label: "Jobs & Services", value: <span className="text-blue-600 font-medium">$4,500</span> },
            { label: "Platform Fees", value: <span className="text-rose-600 font-medium">$0</span> },
            { label: "Other Expenses", value: <span className="text-gray-900 font-medium">$0</span> },
            { divider: true },
            { label: "Total Expenses", value: <span className="text-blue-600 font-semibold">$4,500</span> },
          ]}
        />
      </Card>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Rows({
  items,
}: {
  items: ({ label: string; value: React.ReactNode } | { divider: true })[];
}) {
  return (
    <div className="space-y-0">
      {items.map((it, idx) => {
        if ("divider" in it) return <div key={idx} className="border-t border-gray-100 my-2" />;

        return (
          <div key={it.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
            <div className="text-gray-500">{it.label}:</div>
            <div className="text-right">{it.value}</div>
          </div>
        );
      })}
    </div>
  );
}
