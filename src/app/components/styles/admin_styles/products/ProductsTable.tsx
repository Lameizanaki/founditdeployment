// src/app/components/styles/admin/products/ProductsTable.tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { Product } from "@/app/components/styles/admin/products/mockData";
import {
  IconEye,
  IconDownload,
  IconTrash,
} from "@/app/components/styles/admin/Icon";

function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onActivate();
  }
}

function IconDots() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M12 6.5h.01M12 12h.01M12 17.5h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProductsTable({
  products,
  openMenuId,
  setOpenMenuId,
  onOpenModal,
}: {
  products: Product[];
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
  onOpenModal: (type: "details" | "sales" | "delete", p: Product) => void;
}) {
  const menuWrapRef = useRef<HTMLDivElement | null>(null);

  // click outside close menu
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!openMenuId) return;
      const t = e.target as Node;
      if (menuWrapRef.current && !menuWrapRef.current.contains(t)) {
        setOpenMenuId(null);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [openMenuId, setOpenMenuId]);

  return (
    <section className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-[980px]">
          <div className="grid grid-cols-[360px_150px_170px_140px_90px_90px] px-5 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">
            <div>Product</div>
            <div>Category</div>
            <div>License Types</div>
            <div>Seller</div>
            <div>Sales</div>
            <div className="text-right">Actions</div>
          </div>

          {products.map((p) => {
            const menuOpen = openMenuId === p.id;

            return (
              <div
                key={p.id}
                className="grid grid-cols-[360px_150px_170px_140px_90px_90px] px-5 py-5 border-b border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className={["h-12 w-12 rounded-xl", p.thumbClass].join(" ")} />
                  <div className="text-sm text-gray-900">{p.name}</div>
                </div>

                <div className="flex items-center">
                  <div className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-800">
                    {p.category}
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-900">
                  {p.licenses.map((l) => (
                    <div key={l.label} className="flex items-center gap-2">
                      <div className="px-2 py-0.5 rounded-full border border-gray-200 text-xs text-gray-800 bg-white">
                        {l.label}
                      </div>
                      <div className="text-sm text-gray-900">{l.price}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm text-gray-900">
                  {p.seller}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-900">
                  <span className="text-green-600" aria-hidden="true">
                    ↗
                  </span>
                  {p.sales}
                </div>

                <div
                  className="flex items-center justify-end relative"
                  ref={menuOpen ? menuWrapRef : null}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setOpenMenuId((cur) => (cur === p.id ? null : p.id))
                    }
                    onKeyDown={(e) =>
                      handleKeyboardActivate(e, () =>
                        setOpenMenuId((cur) => (cur === p.id ? null : p.id))
                      )
                    }
                    className="h-9 w-9 rounded-md flex items-center justify-center cursor-pointer select-none hover:bg-gray-50 text-gray-700"
                    aria-label="Open actions menu"
                  >
                    <IconDots />
                  </div>

                  {menuOpen ? (
                    <div className="absolute right-0 top-10 w-52 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden z-10">
                      <div className="py-2">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => onOpenModal("details", p)}
                          onKeyDown={(e) =>
                            handleKeyboardActivate(e, () =>
                              onOpenModal("details", p)
                            )
                          }
                          className="px-3 py-2 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-50 cursor-pointer select-none"
                        >
                          <span className="text-gray-500">
                            <IconEye />
                          </span>
                          View Details
                        </div>

                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => onOpenModal("sales", p)}
                          onKeyDown={(e) =>
                            handleKeyboardActivate(e, () =>
                              onOpenModal("sales", p)
                            )
                          }
                          className="px-3 py-2 flex items-center gap-3 text-sm text-gray-800 hover:bg-gray-50 cursor-pointer select-none"
                        >
                          <span className="text-gray-500">
                            <IconDownload />
                          </span>
                          View Sales Data
                        </div>

                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => onOpenModal("delete", p)}
                          onKeyDown={(e) =>
                            handleKeyboardActivate(e, () =>
                              onOpenModal("delete", p)
                            )
                          }
                          className="px-3 py-2 flex items-center gap-3 text-sm text-red-600 hover:bg-gray-50 cursor-pointer select-none"
                        >
                          <span className="text-red-600">
                            <IconTrash />
                          </span>
                          Delete Product
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-5 py-4 flex items-center justify-between text-sm text-gray-500">
        <div>Showing 4 of 4 products</div>
        <div className="flex items-center gap-2">
          <div className="px-4 h-9 rounded-lg border border-gray-200 bg-white text-gray-400 flex items-center">
            Previous
          </div>
          <div className="px-4 h-9 rounded-lg border border-gray-200 bg-white text-gray-900 flex items-center">
            Next
          </div>
        </div>
      </div>
    </section>
  );
}
