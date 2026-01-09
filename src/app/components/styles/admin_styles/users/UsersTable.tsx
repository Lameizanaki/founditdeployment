"use client";

import React from "react";

import type { UserItem, UserStatus } from "@/app/components/styles/admin_styles/users/type";
import { handleKeyboardActivate } from "@/app/components/styles/admin_styles/users/type";
import UserRowMenu from "@/app/components/styles/admin_styles/users/UserRowMenu";

export default function UsersTable({
  users,
  menuOpenId,
  onChangeMenuOpenId,
  onToggleStatus,
  onOpenLingHe,
}: {
  users: UserItem[];
  menuOpenId: string | null;
  onChangeMenuOpenId: (id: string | null) => void;
  onToggleStatus: (userId: string) => void;
  onOpenLingHe: () => void;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Rating</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id} className="text-sm text-gray-900">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Avatar user={u} />

                    <div
                      role={u.id === "ling-he" ? "button" : undefined}
                      tabIndex={u.id === "ling-he" ? 0 : -1}
                      className={[
                        "min-w-0",
                        u.id === "ling-he" ? "cursor-pointer hover:text-gray-600" : "",
                      ].join(" ")}
                      onClick={() => u.id === "ling-he" && onOpenLingHe()}
                      onKeyDown={(e) =>
                        u.id === "ling-he" && handleKeyboardActivate(e, onOpenLingHe)
                      }
                    >
                      <div className="font-medium text-gray-900 truncate">{u.name}</div>
                      <div className="text-gray-500 truncate">{u.email}</div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <StatusPill status={u.status} />
                </td>

                <td className="px-6 py-4">
                  {typeof u.rating === "number" ? (
                    <div className="inline-flex items-center gap-2">
                      <span className="text-amber-500" aria-hidden="true">
                        <IconStar />
                      </span>
                      <span className="text-gray-900">{u.rating.toFixed(1)}</span>
                    </div>
                  ) : (
                    <span className="text-gray-500">No rating</span>
                  )}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    <UserRowMenu
                      userId={u.id}
                      status={u.status} // Direct, always up-to-date
                      openId={menuOpenId}
                      onChangeOpenId={onChangeMenuOpenId}
                      onToggleStatus={onToggleStatus}
                    />
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-sm text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="px-4 pt-4 pb-3 text-sm text-gray-500 border-b border-gray-200">
          Users
        </div>

        <div className="divide-y divide-gray-100">
          {users.map((u) => (
            <div key={u.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Avatar user={u} />

                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 truncate">{u.name}</div>
                    <div className="text-sm text-gray-500 truncate">{u.email}</div>
                  </div>
                </div>

                <UserRowMenu
                  userId={u.id}
                  status={u.status}
                  openId={menuOpenId}
                  onChangeOpenId={onChangeMenuOpenId}
                  onToggleStatus={onToggleStatus}
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <StatusPill status={u.status} />

                {typeof u.rating === "number" ? (
                  <div className="inline-flex items-center gap-2 text-sm">
                    <span className="text-amber-500" aria-hidden="true">
                      <IconStar />
                    </span>
                    <span className="text-gray-900">{u.rating.toFixed(1)}</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">No rating</span>
                )}
              </div>
            </div>
          ))}

          {users.length === 0 && (
            <div className="px-4 py-10 text-center text-sm text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Dynamic Status Pill
function StatusPill({ status }: { status: UserStatus }) {
  const variants: Record<UserStatus, { bg: string; text: string; border: string }> = {
    Active: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-100",
    },
    Removed: {
      bg: "bg-rose-50",
      text: "text-rose-700",
      border: "border-rose-100",
    },
  };

  const style = variants[status] ?? {
    bg: "bg-gray-50",
    text: "text-gray-700",
    border: "border-gray-200",
  };

  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
        style.bg,
        style.text,
        style.border,
      ].join(" ")}
    >
      {status}
    </span>
  );
}

function Avatar({ user }: { user: UserItem }) {
  const text = user.avatarText ?? user.name?.slice(0, 2)?.toUpperCase() ?? "U";
  return (
    <div className="h-10 w-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm">
      {text}
    </div>
  );
}

function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5l2.8 5.7 6.3.9-4.55 4.4 1.08 6.28L12 17.9 6.37 20.78l1.08-6.28L2.9 10.1l6.3-.9L12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}