"use client";

import React from "react";

function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

export default function UserHeaderCard({
  name,
  email,
  verified,
  status,
  roles,
  lastActive,
  location,
  joined,
  onToggleStatus,
}: {
  name: string;
  email: string;
  verified?: boolean;
  status: "Active" | "Removed";
  roles: string[];
  lastActive: string;
  location: string;
  joined: string;
  onToggleStatus: () => void;
}) {
  const statusPill =
    status === "Active"
      ? "bg-green-50 text-green-700"
      : "bg-rose-50 text-rose-700";

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        {/* Avatar */}
        <div className="h-14 w-14 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
          {/* placeholder avatar */}
          <div className="h-full w-full bg-gradient-to-b from-gray-200 to-gray-100" />
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-2xl font-semibold text-gray-900 truncate">{name}</div>

            {verified ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium">
                <IconShield />
                Verified
              </span>
            ) : null}

            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusPill}`}>
              {status}
            </span>
          </div>

          <div className="mt-1 text-sm text-gray-500">{email}</div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {roles.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-2 rounded-md bg-gray-100 text-gray-700 px-3 py-1 text-xs"
              >
                <IconTag />
                {r}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="inline-flex items-center gap-2">
              <IconClock />
              <span>Last Active: {lastActive}</span>
            </div>

            <span className="text-gray-300">•</span>

            <div className="inline-flex items-center gap-2">
              <IconPin />
              <span>Location: {location}</span>
            </div>

            <span className="text-gray-300">•</span>

            <div className="inline-flex items-center gap-2">
              <IconCalendar />
              <span>Joined {joined}</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <div className="md:pt-1">
          <div
            role="button"
            tabIndex={0}
            onClick={onToggleStatus}
            onKeyDown={(e) => handleKeyboardActivate(e, onToggleStatus)}
            className="h-10 px-4 rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-50 cursor-pointer select-none inline-flex items-center gap-2 text-sm text-gray-900"
            aria-label={status === "Active" ? "Remove" : "Activate"}
          >
            <IconBan />
            {status === "Active" ? "Remove" : "Activate"}
          </div>
        </div>
      </div>
    </div>
  );
}

/* icons (currentColor) */
function IconShield() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTag() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 12l-8 8-10-10V2h8l10 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M7.5 7.5h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3v3M17 3v3M4 8h16M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconBan() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="2" />
      <path d="M7.5 7.5 16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
