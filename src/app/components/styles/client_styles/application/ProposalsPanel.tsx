// app/components/styles/application/ProposalsPanel.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import type { Proposal } from "@/app/components/styles/client_styles/application/mockdata";
import ProposalCard from "@/app/components/styles/client_styles/application/ProposalCard";
import DropdownBlank from "@/app/components/styles/client_styles/application/DropDownBlank";

export default function ProposalsPanel({
  proposals,
  shortlistedCount,
  onToggleShortlist,
  onOpenProposal,
}: {
  proposals: Proposal[];
  shortlistedCount: number;
  onToggleShortlist: (id: string) => void;
  onOpenProposal: () => void;
}) {
  const [sortOpen, setSortOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const sortRef = useRef<HTMLDivElement | null>(null);
  const budgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSortOpen(false);
        setBudgetOpen(false);
      }
    }
    function onMouseDown(e: MouseEvent) {
      const t = e.target as Node;
      if (sortRef.current && !sortRef.current.contains(t)) setSortOpen(false);
      if (budgetRef.current && !budgetRef.current.contains(t)) setBudgetOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* filter row */}
      <div className="bg-white border rounded-xl shadow-sm p-3">
        <div className="flex flex-wrap items-center gap-2">
          <DropdownBlank
  ref={sortRef}
  open={sortOpen}
  label="Best match"
  onToggle={() => {
    setSortOpen((v) => !v);
    setBudgetOpen(false);
  }}
/>

<DropdownBlank
  ref={budgetRef}
  open={budgetOpen}
  label="All budgets"
  onToggle={() => {
    setBudgetOpen((v) => !v);
    setSortOpen(false);
  }}
/>

          <div className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            {shortlistedCount} shortlisted
          </div>
        </div>
      </div>

      {proposals.map((p) => (
        <ProposalCard
          key={p.id}
          proposal={p}
          onOpenProposal={onOpenProposal}
          onToggleShortlist={() => onToggleShortlist(p.id)}
        />
      ))}
    </div>
  );
}
