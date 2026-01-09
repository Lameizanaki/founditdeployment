// src/app/components/styles/admin/Sidebar.tsx
"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import type { AdminNavItem } from "@/app/components/styles/admin_styles/mockData";
import {
  IconBox,
  IconDashboard,
  IconReport,
  IconSettings,
  IconUsers,
  IconClose,
} from "@/app/components/styles/admin_styles/Icon";

function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

function getNavIcon(iconKey: AdminNavItem["iconKey"]) {
  if (iconKey === "dashboard") return <IconDashboard />;
  if (iconKey === "products") return <IconBox />;
  if (iconKey === "users") return <IconUsers />;
  if (iconKey === "reports") return <IconReport />;
  return <IconSettings />;
}

export default function AdminSidebar({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: AdminNavItem[];
}) {
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      {/* overlay */}
      {open ? (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={onClose}
          aria-label="Close sidebar overlay"
        />
      ) : null}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200",
          "w-[78vw] max-w-[320px]",
          "transform transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full",

          "md:static md:translate-x-0 md:w-64",
          "md:sticky md:top-14 md:h-[calc(100vh-56px)] md:self-start",
        ].join(" ")}
        aria-label="Admin sidebar"
      >
        <div className="h-full flex flex-col">
          {/* Mobile header */}
          <div className="md:hidden flex items-center justify-between px-4 h-14 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">Menu</h3>

            <div
              role="button"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
              className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center cursor-pointer select-none hover:bg-gray-50"
              aria-label="Close sidebar"
            >
              <IconClose />
            </div>
          </div>

          <nav className="p-4">
            <div className="space-y-2">
              {items.map((item) => {
                const active = isActive(item.href);

                // IMPORTANT: icon + label colors are controlled separately (no leaking).
                const rowClass = active ? "bg-fuchsia-600" : "hover:bg-gray-50";
                const iconClass = active ? "text-white" : "text-gray-800";
                const labelClass = active ? "text-white" : "text-gray-900";

                return (
                  <div
                    key={item.href}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      onClose();
                      router.push(item.href);
                    }}
                    onKeyDown={(e) =>
                      handleKeyboardActivate(e, () => {
                        onClose();
                        router.push(item.href);
                      })
                    }
                    className={[
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                      "cursor-pointer select-none transition",
                      rowClass,
                    ].join(" ")}
                    aria-label={item.label}
                  >
                    <span className={["shrink-0", iconClass].join(" ")}>
                      {getNavIcon(item.iconKey)}
                    </span>

                    <span className={["font-medium", labelClass].join(" ")}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="mt-auto p-4 text-xs text-gray-300" />
        </div>
      </aside>
    </>
  );
}
