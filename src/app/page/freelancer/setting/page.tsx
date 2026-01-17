"use client";

import React from "react";

import Shell from "@/app/components/styles/freelancer_styles/setting/shell";
import Sidebar from "@/app/components/styles/freelancer_styles/setting/sidebar";
import Content from "@/app/components/styles/freelancer_styles/setting/content";
import {
  TabKey,
  tabItems,
  blockedUsersMock,
} from "@/app/components/styles/freelancer_styles/setting/mockData";

export default function FreelancerSettingPage() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("overview");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Modals
  const [unblockOpen, setUnblockOpen] = React.useState(false);
  const [unblockTargetId, setUnblockTargetId] = React.useState<string | null>(
    null
  );

  const [addPayOpen, setAddPayOpen] = React.useState(false);

  // Data that changes (blocked list only)
  const [blockedUsers, setBlockedUsers] = React.useState(blockedUsersMock);

  return (
    <Shell
      title="Work Settings"
      drawerOpen={drawerOpen}
      setDrawerOpen={setDrawerOpen}
      sidebar={
        <Sidebar
          activeTab={activeTab}
          onTabChange={(k) => {
            setActiveTab(k);
            setDrawerOpen(false);
          }}
          items={tabItems}
        />
      }
    >
      <Content
        activeTab={activeTab}
        // Modals triggers
        onOpenAddPayment={() => setAddPayOpen(true)}
        onOpenUnblock={(id) => {
          setUnblockTargetId(id);
          setUnblockOpen(true);
        }}
        // Data + setters for unblock behavior
        blockedUsers={blockedUsers}
        setBlockedUsers={setBlockedUsers}
        unblockOpen={unblockOpen}
        setUnblockOpen={setUnblockOpen}
        unblockTargetId={unblockTargetId}
        setUnblockTargetId={setUnblockTargetId}
        addPayOpen={addPayOpen}
        setAddPayOpen={setAddPayOpen}
      />
    </Shell>
  );
}
