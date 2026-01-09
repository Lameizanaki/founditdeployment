"use client";

import React, { useEffect } from "react";

export default function ModalOverlay({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  // Lock scroll + ESC close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/45"
        onClick={onClose}
        aria-label="Close modal overlay"
      />
      <div className="relative z-10 min-h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
