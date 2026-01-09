// src/app/components/styles/admin/products/ProductsHeader.tsx
"use client";

import React from "react";

function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function ProductsHeader() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Product Management
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage all products listed on the platform
        </p>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => {}}
        onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
        className="h-10 px-4 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm cursor-pointer select-none flex items-center justify-center"
        aria-label="Add New Product"
      >
        Add New Product
      </div>
    </div>
  );
}
