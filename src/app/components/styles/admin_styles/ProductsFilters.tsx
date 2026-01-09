// src/app/components/styles/admin/products/ProductsFilters.tsx
"use client";

import React from "react";

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.2 16.2 21 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductsFilters() {
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 h-11">
          <div className="text-gray-500">
            <IconSearch />
          </div>
          <input
            className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-500"
            placeholder="Search products or sellers..."
            aria-label="Search products"
          />
        </div>

        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 cursor-pointer select-none">
          <div className="text-sm text-gray-800">All Categories</div>
          <div className="text-gray-500">
            <IconChevronDown />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 h-11 cursor-pointer select-none">
          <div className="text-sm text-gray-800">All Status</div>
          <div className="text-gray-500">
            <IconChevronDown />
          </div>
        </div>
      </div>
    </section>
  );
}
