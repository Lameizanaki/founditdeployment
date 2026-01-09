// src/app/components/styles/admin/ModalShell.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { IconClose } from "@/app/components/styles/admin_styles/Icon";

function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function ModalShell({
  open,
  title,
  subtitle,
  size = "md",
  onClose,
  children,
  footer,
}: {
  open: boolean;
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onMouseDown(e: MouseEvent) {
      const el = cardRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) onClose();
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const widthClass =
    size === "sm"
      ? "max-w-[520px]"
      : size === "lg"
      ? "max-w-[880px]"
      : "max-w-[680px]";

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-start justify-center px-4 py-10">
        <div
          ref={cardRef}
          className={[
            "w-full",
            widthClass,
            "bg-white rounded-xl border border-gray-200 shadow-xl",
            "max-h-[90vh] flex flex-col overflow-hidden",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="px-6 py-4 border-b border-gray-200 flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold text-gray-900">{title}</div>
              {subtitle ? (
                <div className="mt-1 text-sm text-gray-500">{subtitle}</div>
              ) : null}
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={(e) => handleKeyboardActivate(e, onClose)}
              className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center cursor-pointer select-none hover:bg-gray-50 text-gray-700"
              aria-label="Close modal"
            >
              <IconClose />
            </div>
          </div>

          <div className="px-6 py-5 overflow-auto">{children}</div>

          {footer ? (
            <div className="px-6 py-4 border-t border-gray-200 bg-white">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
