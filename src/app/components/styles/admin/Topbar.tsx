// src/app/components/styles/admin/Topbar.tsx
"use client";

import React from "react";
import { IconBell, IconUserCircle } from "@/app/components/styles/admin/Icon";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="text-2xl font-semibold text-gray-900">Admin Panel</div>

        <div className="flex items-center gap-4">
          {/* bell: NO background box */}
          <div className="text-gray-700" aria-label="Notifications" title="Notifications">
            <IconBell />
          </div>

          {/* profile: light circle */}
          <div
            className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700"
            aria-label="Profile"
            title="Profile"
          >
            <IconUserCircle />
          </div>
        </div>
      </div>
    </header>
  );
}
