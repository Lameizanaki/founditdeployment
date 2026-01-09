"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  JOB,
  MESSAGES,
  PROPOSALS,
  HIRED,
  MATCHES,
  type TabKey,
  type Proposal,
} from "@/app/components/styles/client_styles/application/mockdata";

import {
  IconMore,
  IconEye,
  IconSettings,
  IconPause,
  Iconx,
} from "@/app/components/styles/client_styles/application/icons";

import { handleKeyboardActivate } from "@/app/components/styles/client_styles/application/utils";

import TabsBar from "@/app/components/styles/client_styles/application/TabsBar";
import ProposalsPanel from "@/app/components/styles/client_styles/application/ProposalsPanel";
import MessagesPanel from "@/app/components/styles/client_styles/application/MessagesPanel";
import HiredPanel from "@/app/components/styles/client_styles/application/HiredPanel";
import ApplicationSidebar from "@/app/components/styles/client_styles/application/ApplicationSidebar";
import DropDownMenu from "@/app/components/styles/client_styles/application/DropDownMenu";

import ClientFooter from "@/app/components/styles/global_styles/client/footer";
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";

// ✅ new modals (the ones we built for this page)
import PauseJobApplicationsModal from "@/app/components/styles/client_styles/application/PauseJobApplicationsModal";
import CloseJobPostingModal from "@/app/components/styles/client_styles/application/CloseJobPostingModal";

export default function ApplicationPage() {
  const router = useRouter();
const stickyTopClass = "top-[88px]"; // 72px header + 16px gap


  const [tab, setTab] = useState<TabKey>("proposals");

  // proposals shortlist state
  const [proposalList, setProposalList] = useState<Proposal[]>(PROPOSALS);

  // top-right job actions menu
  const [jobMenuOpen, setJobMenuOpen] = useState(false);

  // ✅ modals
  const [pauseOpen, setPauseOpen] = useState(false);
  const [closeOpen, setCloseOpen] = useState(false);

  const shortlistedCount = useMemo(
    () => proposalList.filter((p) => p.shortlisted).length,
    [proposalList]
  );

  return (
    <>
      <ClientNavHeader />

      <div className="min-h-screen bg-gray-50">
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-4">
          {/* Top job info header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div
                role="button"
                tabIndex={0}
                onClick={() => {}}
                onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
                className="inline-flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none hover:text-gray-900"
                aria-label="Back to jobs"
              >
                <span className="text-lg leading-none">
                  {/* ✅ keep your exact inline SVG */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00065 12.6654L3.33398 7.9987L8.00065 3.33203"
                      stroke="#717182"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.6673 8H3.33398"
                      stroke="#717182"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Back to jobs
              </div>

              <div className="mt-2 text-lg font-semibold text-gray-900">
                {JOB.title}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  {JOB.postedLabel}
                </span>

                <span className="inline-flex items-center gap-1">
                  <IconEye />
                  {JOB.views} views
                </span>

                <span className="inline-flex items-center gap-1">
                  <span className="h-4 w-4 rounded bg-gray-200 inline-flex items-center justify-center text-[10px] text-gray-700">
                    {/* ✅ keep your exact inline doc SVG */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1565_12519)">
                        <path
                          d="M9.99935 1.33203H3.99935C3.64573 1.33203 3.30659 1.47251 3.05654 1.72256C2.80649 1.9726 2.66602 2.31174 2.66602 2.66536V13.332C2.66602 13.6857 2.80649 14.0248 3.05654 14.2748C3.30659 14.5249 3.64573 14.6654 3.99935 14.6654H11.9993C12.353 14.6654 12.6921 14.5249 12.9422 14.2748C13.1922 14.0248 13.3327 13.6857 13.3327 13.332V4.66536L9.99935 1.33203Z"
                          stroke="#717182"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33398 1.33203V3.9987C9.33398 4.35232 9.47446 4.69146 9.72451 4.94151C9.97456 5.19156 10.3137 5.33203 10.6673 5.33203H13.334"
                          stroke="#717182"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66732 6H5.33398"
                          stroke="#717182"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6673 8.66797H5.33398"
                          stroke="#717182"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6673 11.332H5.33398"
                          stroke="#717182"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1565_12519">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  {JOB.proposals} proposals
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                  {JOB.visibility}
                </span>
              </div>
            </div>

            {/* Job actions dropdown */}
            <DropDownMenu
              align="right"
              open={jobMenuOpen}
              onOpenChange={setJobMenuOpen}
              trigger={
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setJobMenuOpen((v) => !v)}
                  onKeyDown={(e) =>
                    handleKeyboardActivate(e, () => setJobMenuOpen((v) => !v))
                  }
                  className="h-9 w-9 rounded-md border bg-white flex items-center justify-center cursor-pointer select-none
                           hover:bg-gray-50 hover:border-gray-300 transition active:scale-[0.99]"
                  aria-label="Job actions"
                >
                  <IconMore />
                </div>
              }
            >
              <DropDownMenu.Item
                icon={<IconEye />}
                label="View full post"
                onClick={() => {
                  setJobMenuOpen(false);
                  router.push("/page/application/viewfulljob");
                }}
              />

              <DropDownMenu.Item
                icon={<IconSettings />}
                label="Edit job post"
                onClick={() => {
                  setJobMenuOpen(false);
                  // later
                }}
              />

              <DropDownMenu.Item
                icon={<IconPause />}
                label="Pause applications"
                onClick={() => {
                  setJobMenuOpen(false);
                  setPauseOpen(true);
                }}
              />

              <DropDownMenu.Divider />

              <DropDownMenu.Item
                icon={<Iconx />}
                label="Close job"
                tone="danger"
                onClick={() => {
                  setJobMenuOpen(false);
                  setCloseOpen(true);
                }}
              />
            </DropDownMenu>
          </div>

          <div className="mt-4 border-t" />

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Left */}
            <section className="lg:col-span-8">
              <TabsBar tab={tab} onChange={setTab} />

              <div className="mt-4">
                {tab === "proposals" ? (
                  <ProposalsPanel
                    proposals={proposalList}
                    shortlistedCount={shortlistedCount}
                    onToggleShortlist={(id) => {
                      setProposalList((prev) =>
                        prev.map((p) =>
                          p.id === id
                            ? { ...p, shortlisted: !p.shortlisted }
                            : p
                        )
                      );
                    }}
                    onOpenProposal={() =>
                      router.push("/page/application/proposals")
                    }
                  />
                ) : null}

                {tab === "messages" ? (
                  <MessagesPanel messages={MESSAGES} />
                ) : null}

                {tab === "hired" ? <HiredPanel hired={HIRED} /> : null}
              </div>
            </section>

            {/* Right */}
            <aside className="lg:col-span-4">
              {/* ✅ keep your old sticky style */}
              <div className="sticky top-24 space-y-4">
                <ApplicationSidebar matches={MATCHES} job={JOB} />
              </div>
            </aside>
          </div>
        </main>
      </div>

      <ClientFooter />

      {/* ✅ Modals */}
      <PauseJobApplicationsModal
  open={pauseOpen}
  activeProposalsCount={proposalList.length}
  onClose={() => setPauseOpen(false)}
/>

      <CloseJobPostingModal
        open={closeOpen}
        onClose={() => setCloseOpen(false)}
      />
    </>
  );
}
