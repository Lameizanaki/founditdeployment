"use client";

import React, { forwardRef } from "react";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";
import {
  IconChevronDown,
  IconChevronUp,
} from "@/app/components/styles/client_styles/application/icons";

type DropdownBlankProps = {
  open: boolean;
  label: string;
  onToggle: () => void;
};

const DropdownBlank = forwardRef<HTMLDivElement, DropdownBlankProps>(
  function DropdownBlank({ open, label, onToggle }, ref) {
    return (
      <div className="relative" ref={ref}>
        <div
          role="button"
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={(e) => handleKeyboardActivate(e, onToggle)}
          className="
            inline-flex items-center gap-2
            rounded-md border bg-white
            px-3 py-2 text-sm text-gray-700
            cursor-pointer select-none
            hover:bg-gray-50 hover:border-gray-300
            transition active:scale-[0.99]
          "
          aria-label={label}
        >
          {label}
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </div>

        {open && (
          <div className="absolute left-0 mt-2 w-44 rounded-xl border bg-white shadow-md ring-1 ring-black/5 p-2 z-10">
            <div className="text-xs text-gray-500 px-2 py-2">
              Blank menu (later)
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default DropdownBlank;
