"use client";

import React from "react";

export default function SellerTabPanels() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card title="Store Performance" icon={<IconBox />} iconClass="text-blue-600">
          <Rows
            items={[
              { label: "Total Products Listed", value: <span className="font-medium text-gray-900">15</span> },
              { label: "Products Sold", value: <span className="text-emerald-600 font-medium">47</span> },
              { label: "Completed Sales", value: <span className="font-medium text-gray-900">58</span> },
              { label: "Pending Orders", value: <span className="text-orange-500 font-medium">3</span> },
              { label: "Total Customers", value: <span className="font-medium text-gray-900">42</span> },
            ]}
          />
        </Card>

        <Card title="Revenue Summary" icon={<IconTrendUp />} iconClass="text-emerald-600">
          <Rows
            items={[
              { label: "Total Revenue", value: <span className="text-emerald-600 font-medium">$7,800</span> },
              { label: "Avg. Sale Value", value: <span className="font-medium text-gray-900">$166</span> },
              { label: "Customer Rating", value: <span className="inline-flex items-center gap-1 font-medium text-gray-900"><span className="text-amber-500"><IconStar /></span>4.7/5</span> },
              { label: "Refund Rate", value: <span className="text-emerald-600 font-medium">2.1%</span> },
              { label: "Avg. per Customer", value: <span className="font-medium text-gray-900">$186</span> },
            ]}
          />
        </Card>
      </div>

      {/* Customer Feedback */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
        <div className="flex items-center gap-2">
          <span className="text-amber-500" aria-hidden="true">
            <IconStar />
          </span>
          <div className="font-semibold text-gray-900">Customer Feedback</div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <MiniStat title="Average Rating" value="4.7" right={<Stars />} />
          <MiniStat title="Total Reviews" value="47" />
          <MiniStat title="Satisfaction Rate" value={<span className="text-emerald-600 font-semibold">97.9%</span>} />
        </div>
      </div>
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

function MiniStat({
  title,
  value,
  right,
}: {
  title: string;
  value: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {right ? <div>{right}</div> : null}
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
      <IconStarSmall />
      <IconStarSmall />
      <IconStarSmall />
      <IconStarSmall />
      <IconStarOutline />
    </div>
  );
}

/* icons */
function IconBox() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 8l-9-5-9 5 9 5 9-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 13v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconTrendUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17l6-6 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 8h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.8 5.7 6.3.9-4.55 4.4 1.08 6.28L12 17.9 6.37 20.78l1.08-6.28L2.9 10.1l6.3-.9L12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconStarSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.8 5.7 6.3.9-4.55 4.4 1.08 6.28L12 17.9 6.37 20.78l1.08-6.28L2.9 10.1l6.3-.9L12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function IconStarOutline() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.8 5.7 6.3.9-4.55 4.4 1.08 6.28L12 17.9 6.37 20.78l1.08-6.28L2.9 10.1l6.3-.9L12 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
