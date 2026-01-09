"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

import { IconChevronLeft, IconChevronRight } from "@/app/components/styles/client_styles/application/icons";

export default function ProposalTopRow() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between gap-3">
      <div
        role="button"
        tabIndex={0}
        onClick={() => router.push("/page/application")}
        onKeyDown={(e) => handleKeyboardActivate(e, () => router.push("/page/application"))}
        className="inline-flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none hover:text-gray-900"
        aria-label="Back to proposals"
      >
        <span className="inline-flex">
          <IconChevronLeft />
        </span>
        Back to proposals
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-700">
          <IconChevronLeft />
        </div>
        <span>1 of 3</span>
        <div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center text-gray-700">
          <IconChevronRight />
        </div>
      </div>
    </div>
  );
}
