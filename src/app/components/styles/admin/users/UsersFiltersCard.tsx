"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import type {
  UserRole,
  UserStatus,
} from "@/app/components/styles/admin/users/type";

type RoleValue = "All" | UserRole;
type StatusValue = "All" | UserStatus;

type Option<T extends string> = {
  value: T;
  label: string;
  dividerAfter?: boolean; // adds a gap line after this option
};

export default function UsersFiltersCard({
  query,
  onChangeQuery,
  roleFilter,
  onChangeRole,
  statusFilter,
  onChangeStatus,
}: {
  query: string;
  onChangeQuery: (v: string) => void;
  roleFilter: RoleValue;
  onChangeRole: (v: RoleValue) => void;
  statusFilter: StatusValue;
  onChangeStatus: (v: StatusValue) => void;
}) {
  const roleOptions: Option<RoleValue>[] = useMemo(
    () => [
      { value: "All", label: "All Roles", dividerAfter: true }, // divider creates the "gap"
      { value: "Freelancer", label: "Freelancers" },
      { value: "Client", label: "Clients" },
      { value: "Seller", label: "Sellers" },
    ],
    []
  );

  const statusOptions: Option<StatusValue>[] = useMemo(
    () => [
      { value: "All", label: "All Status", dividerAfter: true },
      { value: "Active", label: "Active" },
      { value: "Removed", label: "Removed" },
    ],
    []
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-3">
        {/* Search */}
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <IconSearch />
          </div>

          <input
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            placeholder="Search by name or email..."
            className="h-10 w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500"
          />
        </div>

        {/* Role dropdown (custom) */}
        <DropdownSelect<RoleValue>
          value={roleFilter}
          onChange={onChangeRole}
          options={roleOptions}
          ariaLabel="Filter by role"
          widthClass="md:w-[220px]"
        />

        {/* Status dropdown (custom) */}
        <DropdownSelect<StatusValue>
          value={statusFilter}
          onChange={onChangeStatus}
          options={statusOptions}
          ariaLabel="Filter by status"
          widthClass="md:w-[220px]"
        />
      </div>
    </div>
  );
}

function DropdownSelect<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
  widthClass,
}: {
  value: T;
  onChange: (v: T) => void;
  options: Option<T>[];
  ariaLabel: string;
  widthClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const currentLabel =
    options.find((o) => o.value === value)?.label ?? String(value);

  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      const el = wrapRef.current;
      if (!el) return;
      if (open && !el.contains(e.target as Node)) setOpen(false);
    }

    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [open]);

  return (
    <div ref={wrapRef} className={`relative ${widthClass ?? ""}`}>
      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((s) => !s);
          }
          if (e.key === "Escape") setOpen(false);
          if (e.key === "ArrowDown") setOpen(true);
        }}
        className={`h-11 w-full px-4 pr-10 rounded-md border shadow-sm bg-white
                    flex items-center justify-between text-sm text-gray-900
                    cursor-pointer select-none transition
                    hover:border-gray-300
                    ${
                      open
                        ? "border-gray-300 ring-2 ring-gray-200"
                        : "border-gray-200"
                    }`}
      >
        <div className="truncate">{currentLabel}</div>

        {/* Chevron: down by default, up when open */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-400
                      transition-transform duration-150 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
        >
          <IconChevronDown />
        </div>
      </div>

      {/* Menu */}
      {open && (
        <div
          className="absolute left-0 right-0 mt-2 z-30
                     rounded-lg border border-gray-200 bg-white shadow-lg
                     p-1"
        >
          {options.map((opt) => {
            const selected = opt.value === value;

            return (
              <React.Fragment key={opt.value}>
                <div
                  role="option"
                  tabIndex={0}
                  aria-selected={selected}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onChange(opt.value);
                      setOpen(false);
                    }
                    if (e.key === "Escape") setOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm cursor-pointer select-none
                              ${
                                selected
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-800"
                              }
                              hover:bg-gray-50`}
                >
                  {opt.label}
                </div>

                {/* Gap / divider after first option (fixes "All Roles" next to "All Roles") */}
                {opt.dividerAfter && (
                  <div className="my-1 border-t border-gray-100" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}

function IconSearch() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
