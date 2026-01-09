"use client";

import React from "react";

export default function OverviewPanels({ status }: { status: "Active" | "Removed" }) {
  const statusPill =
    status === "Active"
      ? "bg-green-50 text-green-700"
      : "bg-rose-50 text-rose-700";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Account Information */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="text-base font-semibold text-gray-900">Account Information</div>

        <div className="mt-5 space-y-4 text-sm">
          <Row label="User ID" value="1" />
          <Row label="Email" value="sarah.chen@example.com" />
          <Row label="Location" value="San Francisco, CA" />

          <div className="flex items-center justify-between gap-4">
            <div className="text-gray-500">Verified</div>
            <span className="inline-flex items-center rounded-full bg-fuchsia-600 text-white px-3 py-1 text-xs font-medium">
              Yes
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="text-gray-500">Account Status</div>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusPill}`}>
              {status}
            </span>
          </div>

          <Row label="Member Since" value="1/15/2024" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <div className="text-base font-semibold text-gray-900">Quick Stats</div>

        <div className="mt-5 space-y-4 text-sm">
          <Row label="Total Jobs Completed" value="47" />
          <Row label="Ongoing Jobs" value="3" />
          <Row label="Products Sold" value="47" />
          <Row label="Total Transactions" value="59" />
          <Row label="Pending Payments" value={<span className="text-orange-500 font-medium">$850</span>} />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-gray-500">{label}:</div>
      <div className="text-gray-900">{value}</div>
    </div>
  );
}
