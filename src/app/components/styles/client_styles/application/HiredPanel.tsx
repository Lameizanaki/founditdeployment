// app/components/styles/application/HiredPanel.tsx
"use client";

import React from "react";
import type { HiredRow } from "@/app/components/styles/client_styles/application/mockdata";
import HiredCard from "@/app/components/styles/client_styles/application/HiredCard";

export default function HiredPanel({ hired }: { hired: HiredRow[] }) {
  return (
    <div className="space-y-4">
      {hired.map((h) => (
        <HiredCard key={h.id} hired={h} />
      ))}
    </div>
  );
}
