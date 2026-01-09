"use client";

import React from "react";
import { IconHeart, IconShare } from "@/app/components/styles/client_styles/application/icons";
import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

export default function ViewFullJobHeader({
  title,
  badge,
  postedByName,
  postedByImageSrc,
  liked,
  onToggleLike,
  onBack,
}: {
  title: string;
  badge: string;
  postedByName: string;
  postedByImageSrc: string;
  liked: boolean;
  onToggleLike: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        {/* Back (Figma style: no border box, subtle hover) */}
        <div
          role="button"
          tabIndex={0}
          onClick={onBack}
          onKeyDown={(e) => handleKeyboardActivate(e, onBack)}
          className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 cursor-pointer select-none hover:bg-gray-100"
          aria-label="Back"
          title="Back"
        >
          <IconArrowLeft />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 ">
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            <span className="rounded-full border border-gray-200 bg-white px-2.5 p-0.5 text-[11px] text-gray-700 ">
              {badge}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
            <span>Posted by</span>

            {/* Posted-by image (you will replace src) */}
            <img
              src={postedByImageSrc}
              alt={`${postedByName} avatar`}
              className="h-5 w-5 rounded-full object-cover border border-gray-200"
            />

            <span className="text-gray-700">{postedByName}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Heart: clickable, toggles filled red */}
        <div
          role="button"
          tabIndex={0}
          onClick={onToggleLike}
          onKeyDown={(e) => handleKeyboardActivate(e, onToggleLike)}
          className={[
            "inline-flex h-9 w-9 items-center justify-center rounded-full cursor-pointer select-none hover:bg-gray-100",
            liked
              ? "text-red-600 [&_path]:fill-red-600 [&_path]:stroke-red-600"
              : "text-gray-600 [&_path]:fill-transparent [&_path]:stroke-current",
          ].join(" ")}
          aria-label={liked ? "Unsave job" : "Save job"}
          title={liked ? "Saved" : "Save"}
        >
          <IconHeart />
        </div>

        {/* Share: static */}
        <div
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 select-none hover:bg-gray-100"
          aria-label="Share job"
          title="Share"
        >
          <IconShare />
        </div>
      </div>
    </div>
  );
}

function IconArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M14.5 5.5L8 12l6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
