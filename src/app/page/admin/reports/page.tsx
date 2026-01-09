"use client";

import React, { useEffect, useMemo, useState } from "react";
import AdminTopbar from "@/app/components/styles/admin_styles/Topbar";
import AdminSidebar from "@/app/components/styles/admin_styles/Sidebar";
import { adminNavItems } from "@/app/components/styles/admin_styles/mockData";

import ReportsStats from "@/app/components/styles/admin_styles/reports/ReportsStats";
import ReportsFilters from "@/app/components/styles/admin_styles/reports/ReportsFilters";
import ReportsList from "@/app/components/styles/admin_styles/reports/ReportsList";
import ReviewReportModal from "@/app/components/styles/admin_styles/reports/ReviewReportModal";
import ResolveReportModal from "@/app/components/styles/admin_styles/reports/ResolveReportModal";
import DismissReportModal from "@/app/components/styles/admin_styles/reports/DissmissReportModal";

import { reportsMock, statsMock } from "../../../components/styles/admin_styles/reports/mockData";
import type { ReportItem } from "../../../components/styles/admin_styles/reports/mockData";
import { IconMenu } from "@/app/components/styles/admin_styles/Icon";

type ModalKey = null | "review" | "resolve" | "dismiss";

export default function AdminReportsPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const [modal, setModal] = useState<ModalKey>(null);
  const [selected, setSelected] = useState<ReportItem | null>(null);
  

  

  // Lock scroll when sidebar drawer is open (mobile)
  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  const stats = useMemo(() => statsMock, []);
  const reports = useMemo(() => reportsMock, []);

  function openModal(key: Exclude<ModalKey, null>, report: ReportItem) {
    setSelected(report);
    setModal(key);
  }

  function closeModal() {
    setModal(null);
    setSelected(null);
  }

  function handleKeyboardActivate(e: React.KeyboardEvent, onActivate: () => void) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onActivate();
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar above sidebar (as your design) */}
      <AdminTopbar />

      <div className="flex">
        <AdminSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          items={adminNavItems}
        />

        
        <main className="flex-1 px-4 md:px-6 py-6">
          <div className="max-w-5xl">
            {/* Header row + mobile hamburger (NOT in topbar) */}
                                <div className="flex items-start gap-3 mb-6">
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
            
            
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                Reports &amp; Moderation
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                Review and manage flagged content and user reports
              </p>
            </div>
            </div>

            <ReportsStats stats={stats} />

            <div className="mt-6">
              <ReportsFilters />
            </div>

            <div className="mt-6 space-y-6">
              <ReportsList
                reports={reports}
                onReview={(r) => openModal("review", r)}
                onResolve={(r) => openModal("resolve", r)}
                onDismiss={(r) => openModal("dismiss", r)}
              />
            </div>
          </div>
          
        </main>
        
      </div>

      {/* Modals */}
      {modal === "review" && selected ? (
        <ReviewReportModal report={selected} onClose={closeModal} />
      ) : null}

      {modal === "resolve" && selected ? (
        <ResolveReportModal report={selected} onClose={closeModal} />
      ) : null}

      {modal === "dismiss" && selected ? (
        <DismissReportModal report={selected} onClose={closeModal} />
      ) : null}
    </div>

  );
}
