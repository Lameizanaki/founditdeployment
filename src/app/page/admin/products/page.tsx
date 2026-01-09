// src/app/page/admin/products/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import AdminTopbar from "@/app/components/styles/admin/Topbar";
import AdminSidebar from "@/app/components/styles/admin/Sidebar";
import ModalShell from "@/app/components/styles/admin/ModalShell";
import {
  adminNavItems,
  mockProducts,
  recentPurchases,
  salesTrend7Days,
  type ProductRow,
} from "@/app/components/styles/admin_styles/products/mockData";
import {
  IconMore,
  IconDownload,
  IconEye,
  IconMenu,
  IconStar,
  IconTrash,
  IconTrendUp,
} from "@/app/components/styles/admin_styles/Icon";

function handleKeyboardActivate(
  e: React.KeyboardEvent,
  onActivate: () => void
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

type ModalKind = "details" | "sales" | "delete" | null;

export default function AdminProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [rows, setRows] = useState<ProductRow[]>(mockProducts);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const [activeModal, setActiveModal] = useState<ModalKind>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return rows.find((r) => r.id === selectedId) || null;
  }, [rows, selectedId]);

  const modalOpen = activeModal !== null;

  // lock body scroll when sidebar drawer (mobile) OR modal open
  useEffect(() => {
    const shouldLock = modalOpen || sidebarOpen;
    if (!shouldLock) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen, sidebarOpen]);

  // dropdown click-outside + ESC
  useEffect(() => {
    if (!openMenuId) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenuId(null);
    }
    function onMouseDown(e: MouseEvent) {
      const el = menuRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setOpenMenuId(null);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [openMenuId]);

  function openModal(kind: Exclude<ModalKind, null>, productId: string) {
    setSelectedId(productId);
    setActiveModal(kind);
    setOpenMenuId(null);
  }

  function closeModal() {
    setActiveModal(null);
  }

  function deleteSelected() {
    if (!selectedId) return;
    setRows((prev) => prev.filter((r) => r.id !== selectedId));
    closeModal();
  }

  function thumbClass(tone: ProductRow["thumbTone"]) {
    if (tone === "dark") return "bg-gray-900";
    if (tone === "gray") return "bg-gray-400";
    if (tone === "purple") return "bg-fuchsia-500";
    return "bg-blue-500";
  }

  const stickyTop = "top-14"; // below Topbar (h-14)

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminTopbar />

      <div className="flex">
        <AdminSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          items={adminNavItems}
        />

        <main className="flex-1">
          <div className="px-4 md:px-6 py-6">
            {/* Title row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                {/* Hamburger: NOT in topbar (mobile only) */}
                <div className="md:hidden pt-1">
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
                  <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
                    Product Management
                  </h1>
                  <p className="mt-2 text-md text-gray-500">
                    Manage all products listed on the platform
                  </p>
                </div>
              </div>

              <div
                role="button"
                tabIndex={0}
                onClick={() => {}}
                onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
                className="h-10 px-3 rounded-lg bg-fuchsia-600 text-white text-sm font-medium flex items-center justify-center cursor-pointer select-none hover:bg-fuchsia-700"
                aria-label="Add New Product"
              >
                Add New Product
              </div>
            </div>

            {/* Sticky search + filters */}
            <div className={["sticky", stickyTop, "z-10 pt-4"].join(" ")}>
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {/* Search */}
                  <div className="lg:col-span-1">
                    <div className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center gap-2">
                      <span className="text-gray-400">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M21 21l-4.3-4.3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <div className="text-sm text-gray-500">
                        Search products or sellers...
                      </div>
                    </div>
                  </div>

                  {/* Category dropdown placeholder */}
                  <div className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center justify-between">
                    <div className="text-sm text-gray-700">All Categories</div>
                    <div className="text-gray-400">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Status dropdown placeholder */}
                  <div className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-3 flex items-center justify-between">
                    <div className="text-sm text-gray-700">All Status</div>
                    <div className="text-gray-400">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 7.5l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== MOBILE: card list ===== */}
            <div className="mt-4 md:hidden space-y-3">
              {rows.map((r) => {
                const menuOpen = openMenuId === r.id;

                return (
                  <div
                    key={r.id}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm p-4"
                  >
                    {/* top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={[
                            "h-12 w-12 rounded-xl",
                            thumbClass(r.thumbTone),
                          ].join(" ")}
                        />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {r.name}
                          </div>
                          <div className="mt-1 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                            {r.category}
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setOpenMenuId(menuOpen ? null : r.id)}
                          onKeyDown={(e) =>
                            handleKeyboardActivate(e, () =>
                              setOpenMenuId(menuOpen ? null : r.id)
                            )
                          }
                          className="h-9 w-9 rounded-md hover:bg-gray-50 flex items-center justify-center text-gray-700 cursor-pointer select-none"
                          aria-label="Open actions menu"
                        >
                          <IconMore />
                        </div>

                        {menuOpen ? (
                          <div
                            ref={menuRef}
                            className="absolute right-0 top-10 w-52 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10"
                          >
                            <MenuItem
                              icon={<IconEye />}
                              label="View Details"
                              onClick={() => openModal("details", r.id)}
                            />
                            <MenuItem
                              icon={<IconDownload />}
                              label="View Sales Data"
                              onClick={() => openModal("sales", r.id)}
                            />
                            <MenuItem
                              icon={<IconTrash />}
                              label="Delete Product"
                              tone="danger"
                              onClick={() => openModal("delete", r.id)}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* info row */}
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-xs text-gray-500">Seller</div>
                        <div className="mt-1 text-gray-900">{r.seller}</div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-500">Sales</div>
                        <div className="mt-1 flex items-center gap-2 text-gray-900">
                          <span className="text-green-600">
                            <IconTrendUp />
                          </span>
                          {r.sales}
                        </div>
                      </div>
                    </div>

                    {/* license list */}
                    <div className="mt-4">
                      <div className="text-xs text-gray-500">License Types</div>

                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs">
                            Personal
                          </span>
                          <span className="text-sm text-gray-900">
                            ${r.pricePersonal}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs">
                            Commercial
                          </span>
                          <span className="text-sm text-gray-900">
                            ${r.priceCommercial}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs">
                            Extended
                          </span>
                          <span className="text-sm text-gray-900">
                            ${r.priceExtended}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===== DESKTOP: table ===== */}
            <div className="mt-4 hidden md:block bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-12 px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-100">
                <div className="col-span-4">Product</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">License Types</div>
                <div className="col-span-2">Seller</div>
                <div className="col-span-1">Sales</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              <div>
                {rows.map((r) => {
                  const menuOpen = openMenuId === r.id;

                  return (
                    <div
                      key={r.id}
                      className="grid grid-cols-12 px-6 py-5 border-b border-gray-100 items-center"
                    >
                      <div className="col-span-4 flex items-center gap-4">
                        <div
                          className={[
                            "h-12 w-12 rounded-xl",
                            thumbClass(r.thumbTone),
                          ].join(" ")}
                        />
                        <div className="text-sm font-medium text-gray-900">
                          {r.name}
                        </div>
                      </div>

                      <div className="col-span-2">
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                          {r.category}
                        </span>
                      </div>

                      <div className="col-span-2 text-sm text-gray-900">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs">
                            Personal
                          </span>
                          <span className="text-sm">${r.pricePersonal}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs">
                            Commercial
                          </span>
                          <span className="text-sm">${r.priceCommercial}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-1 text-xs">
                            Extended
                          </span>
                          <span className="text-sm">${r.priceExtended}</span>
                        </div>
                      </div>

                      <div className="col-span-2 text-sm text-gray-900">
                        {r.seller}
                      </div>

                      <div className="col-span-1 text-sm text-gray-900 flex items-center gap-2">
                        <span className="text-green-600">
                          <IconTrendUp />
                        </span>
                        <span>{r.sales}</span>
                      </div>

                      <div className="col-span-1 flex items-center justify-end relative">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => setOpenMenuId(menuOpen ? null : r.id)}
                          onKeyDown={(e) =>
                            handleKeyboardActivate(e, () =>
                              setOpenMenuId(menuOpen ? null : r.id)
                            )
                          }
                          className="h-9 w-9 rounded-md hover:bg-gray-50 flex items-center justify-center text-gray-700 cursor-pointer select-none"
                          aria-label="Open actions menu"
                        >
                          <IconMore />
                        </div>

                        {menuOpen ? (
                          <div
                            ref={menuRef}
                            className={[
                              "absolute right-0 w-52 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10",
                              // ⬇️ if last item, open upward
                              r.id === rows[rows.length - 1].id
                                ? "bottom-10"
                                : "top-10",
                            ].join(" ")}
                          >
                            <MenuItem
                              icon={<IconEye />}
                              label="View Details"
                              onClick={() => openModal("details", r.id)}
                            />
                            <MenuItem
                              icon={<IconDownload />}
                              label="View Sales Data"
                              onClick={() => openModal("sales", r.id)}
                            />
                            <MenuItem
                              icon={<IconTrash />}
                              label="Delete Product"
                              tone="danger"
                              onClick={() => openModal("delete", r.id)}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer row */}
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div>
                Showing {rows.length} of {rows.length} products
              </div>

              <div className="flex items-center gap-2">
                <div className="h-9 px-4 rounded-lg border border-gray-200 bg-white text-gray-400 flex items-center justify-center select-none">
                  Previous
                </div>
                <div className="h-9 px-4 rounded-lg border border-gray-200 bg-white text-gray-900 flex items-center justify-center cursor-pointer select-none hover:bg-gray-50">
                  Next
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ===== Modals ===== */}

      {/* Product Details */}
      <ModalShell
        open={activeModal === "details" && !!selected}
        size="md"
        title="Product Details"
        subtitle="Complete information about this product"
        onClose={closeModal}
        footer={
          <div className="flex items-center justify-end gap-2">
            <div
              role="button"
              tabIndex={0}
              onClick={closeModal}
              onKeyDown={(e) => handleKeyboardActivate(e, closeModal)}
              className="h-10 px-4 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 flex items-center justify-center cursor-pointer select-none hover:bg-gray-50"
            >
              Close
            </div>
            <div className="h-10 px-4 rounded-lg bg-fuchsia-600 text-white text-sm font-medium flex items-center justify-center select-none">
              Edit Product
            </div>
          </div>
        }
      >
        {selected ? (
          <div>
            <div className="h-56 rounded-xl bg-gray-100 border border-gray-200" />

            <div className="mt-5">
              <div className="text-xs text-gray-500">Product Name</div>
              <div className="text-lg font-semibold text-gray-900">
                {selected.name}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-gray-500">Category</div>
                <div className="mt-1 text-sm text-gray-900">
                  {selected.category}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="text-xs text-gray-500">Status</div>

                <span className="inline-flex items-center rounded-full bg-fuchsia-600 px-3 py-1 text-xs text-white">
                  {selected.status}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs text-gray-500">License Pricing</div>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                <PriceCard
                  label="Personal"
                  price={selected.pricePersonal}
                  desc="Single user"
                />
                <PriceCard
                  label="Commercial"
                  price={selected.priceCommercial}
                  desc="Business use"
                />
                <PriceCard
                  label="Extended"
                  price={selected.priceExtended}
                  desc="Full rights"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-gray-500">Seller</div>
                <div className="mt-1 text-sm text-gray-900">
                  {selected.seller}
                </div>

                <div className="mt-4 text-xs text-gray-500">Rating</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-900">
                  <span className="text-yellow-500">
                    <IconStar />
                  </span>
                  {selected.rating}
                </div>

                <div className="mt-4 text-xs text-gray-500">Description</div>
                <div className="mt-1 text-sm text-gray-700 leading-relaxed">
                  {selected.description}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Created</div>
                <div className="mt-1 text-sm text-gray-900">
                  {selected.created}
                </div>

                <div className="mt-4 text-xs text-gray-500">Total Sales</div>
                <div className="mt-1 text-sm text-gray-900">
                  {selected.sales}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-5">
              <div className="text-sm font-semibold text-gray-900">
                Performance Stats
              </div>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                <MiniStat label="Total Views" value="3,456" />
                <MiniStat label="Revenue" value="$18,486" />
                <MiniStat label="Conversion" value="6.8%" />
                <MiniStat label="Downloads" value={`${selected.sales}`} />
              </div>
            </div>
          </div>
        ) : null}
      </ModalShell>

      {/* Sales Analytics */}
      <ModalShell
        open={activeModal === "sales" && !!selected}
        size="lg"
        title="Sales Analytics"
        subtitle={
          selected
            ? `Detailed sales and performance data for ${selected.name}`
            : undefined
        }
        onClose={closeModal}
        footer={
          <div className="flex items-center justify-end gap-2">
            <div
              role="button"
              tabIndex={0}
              onClick={closeModal}
              onKeyDown={(e) => handleKeyboardActivate(e, closeModal)}
              className="h-10 px-4 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 flex items-center justify-center cursor-pointer select-none hover:bg-gray-50"
            >
              Close
            </div>
            <div className="h-10 px-4 rounded-lg bg-fuchsia-600 text-white text-sm font-medium flex items-center justify-center select-none">
              <span className="mr-2">
                <IconDownload />
              </span>
              Export Report
            </div>
          </div>
        }
      >
        {selected ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <StatCard
                title="Total Sales"
                value={`${selected.sales}`}
                sub="+12% this month"
                tone="green"
              />
              <StatCard
                title="Revenue"
                value="$18,486"
                sub="+8% this month"
                tone="blue"
              />
              <StatCard
                title="Total Views"
                value="3,456"
                sub="+24% this month"
                tone="purple"
              />
              <StatCard
                title="Conversion"
                value="6.8%"
                sub="+1.2% this month"
                tone="orange"
              />
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-900">
                Sales Trend (Last 7 Days)
              </div>

              <div className="mt-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="space-y-3">
                  {salesTrend7Days.map((d) => {
                    const max = Math.max(
                      ...salesTrend7Days.map((x) => x.value)
                    );
                    const pct =
                      max === 0 ? 0 : Math.round((d.value / max) * 100);

                    return (
                      <div
                        key={d.day}
                        className="grid grid-cols-12 items-center gap-3"
                      >
                        <div className="col-span-1 text-sm text-gray-500">
                          {d.day}
                        </div>
                        <div className="col-span-10">
                          <div className="h-6 rounded-full bg-gray-200 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-fuchsia-600"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-span-1 text-sm text-gray-900 text-right">
                          {d.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-gray-900">
                Recent Purchases
              </div>

              <div className="mt-3 rounded-xl border border-gray-200 overflow-hidden">
                {recentPurchases.map((p) => (
                  <div
                    key={p.name}
                    className="px-4 py-3 flex items-center justify-between border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm font-semibold">
                        {p.initial}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {p.name}
                        </div>
                        <div className="text-xs text-gray-500">{p.when}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-900">${p.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </ModalShell>

      {/* Delete Product */}
      <ModalShell
        open={activeModal === "delete" && !!selected}
        size="sm"
        title="Delete Product?"
        subtitle={
          selected
            ? `Are you sure you want to delete “${selected.name}”? This action cannot be undone.`
            : undefined
        }
        onClose={closeModal}
        footer={
          <div className="flex items-center justify-end gap-2">
            <div
              role="button"
              tabIndex={0}
              onClick={closeModal}
              onKeyDown={(e) => handleKeyboardActivate(e, closeModal)}
              className="h-10 px-4 rounded-lg border border-gray-200 bg-white text-sm text-gray-900 flex items-center justify-center cursor-pointer select-none hover:bg-gray-50"
            >
              Cancel
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={deleteSelected}
              onKeyDown={(e) => handleKeyboardActivate(e, deleteSelected)}
              className="h-10 px-4 rounded-lg bg-red-600 text-white text-sm font-medium flex items-center justify-center cursor-pointer select-none hover:bg-red-700"
              aria-label="Delete Product"
            >
              <span className="mr-2">
                <IconTrash />
              </span>
              Delete Product
            </div>
          </div>
        }
      >
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <div className="text-red-600 mt-0.5">
              <IconTrash />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Warning</div>
              <div className="mt-1 text-sm text-gray-600">
                Deleting this product will remove all associated data, including
                sales history and customer reviews.
              </div>
            </div>
          </div>
        </div>
      </ModalShell>
    </div>
  );
}

/* ===== Small UI helpers ===== */

function MenuItem({
  icon,
  label,
  onClick,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  tone?: "danger";
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => handleKeyboardActivate(e, onClick)}
      className={[
        "px-3 py-2.5 flex items-center gap-3 text-sm cursor-pointer select-none",
        "hover:bg-gray-50",
        tone === "danger" ? "text-red-600" : "text-gray-800",
      ].join(" ")}
      aria-label={label}
    >
      <span className={tone === "danger" ? "text-red-600" : "text-gray-500"}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </div>
  );
}

function PriceCard({
  label,
  price,
  desc,
}: {
  label: string;
  price: number;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-gray-900">${price}</div>
      <div className="mt-1 text-xs text-gray-500">{desc}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="mt-2 text-lg font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function StatCard({
  title,
  value,
  sub,
  tone,
}: {
  title: string;
  value: string;
  sub: string;
  tone: "green" | "blue" | "purple" | "orange";
}) {
  const toneClass =
    tone === "green"
      ? "text-green-600"
      : tone === "blue"
      ? "text-blue-600"
      : tone === "purple"
      ? "text-fuchsia-600"
      : "text-orange-500";

  const icon =
    tone === "green" ? (
      <IconTrendUp />
    ) : tone === "blue" ? (
      <IconTrendUp />
    ) : tone === "purple" ? (
      <IconEye />
    ) : (
      <IconTrendUp />
    );

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div
        className={[
          "flex items-center gap-2 text-xs font-medium",
          toneClass,
        ].join(" ")}
      >
        <span>{icon}</span>
        {title}
      </div>
      <div className="mt-4 text-2xl font-semibold text-gray-900">{value}</div>
      <div className="mt-3 text-xs text-gray-500">{sub}</div>
    </div>
  );
}
