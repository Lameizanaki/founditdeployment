"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type {
  UserItem,
  UserRole,
  UserStatus,
} from "@/app/components/styles/admin/users/type";

import AdminTopbar from "@/app/components/styles/admin/Topbar";
import AdminSidebar from "@/app/components/styles/admin/Sidebar";
import { adminNavItems } from "@/app/components/styles/admin/mockData";
import { IconMenu } from "@/app/components/styles/admin/Icon";

import UsersStatsGrid from "@/app/components/styles/admin/users/UsersStatsGrid";
import UsersFiltersCard from "@/app/components/styles/admin/users/UsersFiltersCard";
import UsersTable from "@/app/components/styles/admin/users/UsersTable";
import { handleKeyboardActivate } from "@/app/components/styles/admin/users/type";

export default function AdminUsersPage() {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"All" | UserRole>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | UserStatus>("All");

  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  const [users, setUsers] = useState<UserItem[]>([
    {
      id: "ling-he",
      name: "Ling He",
      email: "Linghe1612@example.com",
      role: "Freelancer",
      status: "Active",
      rating: 4.9,
      avatarText: "LH",
    },
    {
      id: "mike-johnson",
      name: "Mike Johnson",
      email: "mike.j@example.com",
      role: "Client",
      status: "Active",
      rating: 4.7,
    },
    {
      id: "emma-davis",
      name: "Emma Davis",
      email: "emma.davis@example.com",
      role: "Client",
      status: "Active",
    },
    {
      id: "john-smith",
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Seller",
      status: "Removed",
      rating: 3.2,
    },
  ]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  const filteredUsers = useMemo(() => {
    const q = query.trim().toLowerCase();

    return users.filter((u) => {
      const matchQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q);
      const matchRole = roleFilter === "All" ? true : u.role === roleFilter;
      const matchStatus =
        statusFilter === "All" ? true : u.status === statusFilter;
      return matchQuery && matchRole && matchStatus;
    });
  }, [users, query, roleFilter, statusFilter]);

  // FIXED: Correct toggle logic
  function toggleUserStatus(userId: string) {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id !== userId) return u;
        const nextStatus: UserStatus =
          u.status === "Active" ? "Removed" : "Active";
        return { ...u, status: nextStatus };
      })
    );

    // Close menu after action
    setMenuOpenId(null);
  }

  function openLingHe() {
    router.push("/page/admin/users/usersDetail");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminTopbar />

      <div className="flex">
        <AdminSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          items={adminNavItems}
        />

        <main className="min-w-0 flex-1 px-4 md:px-6 py-6 overflow-x-hidden">
          <div className="flex items-start gap-3">
            <div className="md:hidden pt-0.5">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSidebarOpen(true)}
                onKeyDown={(e) =>
                  handleKeyboardActivate(e, () => setSidebarOpen(true))
                }
                className="h-10 w-10 rounded-md border border-gray-200 bg-white flex items-center justify-center cursor-pointer select-none hover:bg-gray-50 text-gray-900"
                aria-label="Open sidebar"
              >
                <IconMenu />
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                User Management
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Manage all platform users, roles, and permissions
              </p>
            </div>
          </div>

          <div className="mt-6">
            <UsersStatsGrid />
          </div>

          <div className="mt-6">
            <UsersFiltersCard
              query={query}
              onChangeQuery={setQuery}
              roleFilter={roleFilter}
              onChangeRole={setRoleFilter}
              statusFilter={statusFilter}
              onChangeStatus={setStatusFilter}
            />
          </div>

          <div className="mt-6">
            <UsersTable
              users={filteredUsers}
              menuOpenId={menuOpenId}
              onChangeMenuOpenId={setMenuOpenId}
              onToggleStatus={toggleUserStatus}
              onOpenLingHe={openLingHe}
            />
          </div>
        </main>
      </div>
    </div>
  );
}