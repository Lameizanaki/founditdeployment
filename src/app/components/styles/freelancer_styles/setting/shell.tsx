"use client";

import React from "react";
import { handleKeyboardActivate, IconMenu, IconX, useOutside } from "@/app/components/styles/freelancer_styles/setting/ui";

export default function Shell({
  title,
  drawerOpen,
  setDrawerOpen,
  sidebar,
  children,
}: {
  title: string;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  const drawerRef = useOutside<HTMLDivElement>(() => setDrawerOpen(false), drawerOpen);

  React.useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header (page-only) */}
      <div className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setDrawerOpen(true)}
              onKeyDown={(e) => handleKeyboardActivate(e, () => setDrawerOpen(true))}
              className="w-10 h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-800"
              aria-label="Open settings menu"
            >
              {/* SVG: mobile header menu icon - left */}
              <IconMenu />
            </div>
            <div className="text-sm font-semibold text-gray-900">{title}</div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full  px-4 md:px-6 py-5 md:py-8">
        {/* Top title (desktop) */}
        <div className="hidden md:block">
          <div className="text-sm text-gray-500">Work Settings</div>
          <div className="mt-1 text-lg font-semibold text-gray-900">{title}</div>
        </div>

        <div className="mt-4 md:mt-6 flex gap-6">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-[260px] flex-shrink-0">{sidebar}</div>

          {/* Main */}
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex">
            <div
              ref={drawerRef}
              className="w-[290px] max-w-[86vw] h-full bg-white border-r border-gray-200 shadow-sm flex flex-col"
            >
              <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-900">Work Settings</div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setDrawerOpen(false)}
                  onKeyDown={(e) => handleKeyboardActivate(e, () => setDrawerOpen(false))}
                  className="w-9 h-9 rounded-md hover:bg-gray-50 flex items-center justify-center text-gray-700"
                  aria-label="Close drawer"
                >
                  {/* SVG: drawer close icon - right */}
                  <IconX />
                </div>
              </div>

              <div className="p-3 overflow-y-auto">{sidebar}</div>
            </div>

            <div className="flex-1" />
          </div>
        </div>
      )}
    </div>
  );
}
