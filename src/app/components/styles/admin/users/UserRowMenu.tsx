"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import type { UserStatus } from "@/app/components/styles/admin/users/type";
import { handleKeyboardActivate } from "@/app/components/styles/admin/users/type";

export default function UserRowMenu({
  userId,
  status,
  openId,
  onChangeOpenId,
  onToggleStatus,
}: {
  userId: string;
  status: UserStatus;
  openId: string | null;
  onChangeOpenId: (id: string | null) => void;
  onToggleStatus: (userId: string) => void;
}) {
  const isOpen = openId === userId;

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [opensUp, setOpensUp] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const el = wrapRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const MENU_H_EST = 56;
    const GAP = 8;

    const spaceBelow = window.innerHeight - rect.bottom;
    setOpensUp(spaceBelow < MENU_H_EST + GAP);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function onMouseDown(e: MouseEvent) {
      const el = wrapRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        onChangeOpenId(null);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onChangeOpenId(null);
      }
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onChangeOpenId]);

  const actionLabel = status === "Active" ? "Remove" : "Activate";
  const actionTextCls = status === "Active" ? "text-rose-600" : "text-emerald-600";

  const actionIcon = useMemo(
    () => (status === "Active" ? <IconRemoveUser /> : <IconCheckSmall />),
    [status]
  );

  // FIXED: Close menu FIRST, then toggle (prevents stale render issues)
  const handleAction = () => {
    onChangeOpenId(null); // Close immediately
    onToggleStatus(userId); // Then toggle status
  };

  return (
    <div ref={wrapRef} className="relative">
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          onChangeOpenId(isOpen ? null : userId);
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          handleKeyboardActivate(e, () => onChangeOpenId(isOpen ? null : userId));
        }}
        className="h-9 w-9 rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer select-none"
        aria-label="Open actions"
      >
        <IconDots />
      </div>

      {isOpen && (
        <div
          className={[
            "absolute right-0 z-50 w-40 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden",
            opensUp ? "bottom-full mb-2" : "top-full mt-2",
          ].join(" ")}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={handleAction}
            onKeyDown={(e) =>
              handleKeyboardActivate(e, handleAction)
            }
            className="px-3 py-2 flex items-center gap-2 cursor-pointer select-none hover:bg-gray-50"
            aria-label={actionLabel}
          >
            <span className="text-gray-500">{actionIcon}</span>
            <span className={`text-sm font-medium ${actionTextCls}`}>
              {actionLabel}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Icons remain the same
function IconDots() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconRemoveUser() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20a7.5 7.5 0 0 1 13-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCheckSmall() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}