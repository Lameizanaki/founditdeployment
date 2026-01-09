"use client";

import React from "react";

export default function ClientTabPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card title="Client Activity" icon={<IconPulse />} iconClass="text-fuchsia-600">
        <Rows
          items={[
            { label: "Total Jobs Posted", value: <span className="font-medium text-gray-900">10</span> },
            { label: "Active Jobs", value: <span className="text-emerald-600 font-medium">2</span> },
            { label: "Completed Jobs", value: <span className="font-medium text-gray-900">8</span> },
            { label: "Total Freelancers Hired", value: <span className="font-medium text-gray-900">12</span> },
            { label: "Ongoing Projects", value: <span className="text-blue-600 font-medium">3</span> },
          ]}
        />
      </Card>

      <Card title="Spending Summary" icon={<IconDollar />} iconClass="text-blue-600">
        <Rows
          items={[
            { label: "Total Spent", value: <span className="text-blue-600 font-medium">$4,500</span> },
            { label: "Pending Payments", value: <span className="text-orange-500 font-medium">$850</span> },
            { label: "Avg. Project Budget", value: <span className="font-medium text-gray-900">$2,500</span> },
            { label: "Hire Rate", value: <span className="text-emerald-600 font-medium">78%</span> },
            { label: "Avg per Freelancer", value: <span className="font-medium text-gray-900">$375</span> },
          ]}
        />
      </Card>
    </div>
  );
}

function Card({
  title,
  icon,
  iconClass,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  iconClass: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <div className="flex items-center gap-2">
        <span className={iconClass} aria-hidden="true">
          {icon}
        </span>
        <div className="font-semibold text-gray-900">{title}</div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Rows({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <div className="space-y-0">
      {items.map((it, idx) => (
        <div key={it.label}>
          <div className="flex items-center justify-between gap-4 py-3 text-sm">
            <div className="text-gray-500">{it.label}</div>
            <div className="text-right">{it.value}</div>
          </div>
          {idx !== items.length - 1 ? <div className="border-t border-gray-100" /> : null}
        </div>
      ))}
    </div>
  );
}

function IconPulse() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDollar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M17 7a4 4 0 0 0-4-2H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a4 4 0 0 1-4-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
