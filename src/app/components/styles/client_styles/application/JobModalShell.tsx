"use client";

import React, { useEffect } from "react";

function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function JobModalShell({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  // ✅ lock background scroll
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-3"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/45"
        role="button"
        tabIndex={0}
        onClick={onClose}
        onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
        aria-label="Close modal overlay"
      />

      {/* modal */}
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-lg border">
        <div className="flex items-start justify-between gap-3 px-5 pt-5">
          <div className="text-sm font-semibold text-gray-900">{title}</div>

          <div
            role="button"
            tabIndex={0}
            onClick={onClose}
            onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
            className="text-gray-400 hover:text-gray-600 cursor-pointer select-none"
            aria-label="Close modal"
          >
            ✕
          </div>
        </div>

        {/* scrollable content */}
        <div className="px-5 pb-5 pt-4 max-h-[80vh] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
