"use client";

import React, { useEffect, useState } from "react";
import AdminTopbar from "@/app/components/styles/admin_styles/Topbar";
import AdminSidebar from "@/app/components/styles/admin_styles/Sidebar";
import SettingSection from "@/app/components/styles/admin_styles/SettingSection";
import SettingGrid from "@/app/components/styles/admin_styles/SettingGrid";
import SettingField from "@/app/components/styles/admin_styles/SettingField";
import SettingToggle from "@/app/components/styles/admin_styles/SettingToggle";
import SettingDropdown from "@/app/components/styles/admin_styles/SettingDropdown";
import { adminNavItems } from "@/app/components/styles/admin_styles/mockData";
import {
  IconGlobal,
  IconMoney,
  IconShield,
  IconBell,
  IconLock,
  IconMenu,
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

export default function AdminSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // lock scroll when sidebar open (mobile drawer)
  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  const [toggles, setToggles] = useState({
    maintenance: false,
    emailVerify: true,
    phoneVerify: false,
    ekyc: false,
    autoApprove: false,
    emailNotif: true,
    pushNotif: true,
    smsNotif: false,
    twoFA: false,
  });

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [frequencyOpen, setFrequencyOpen] = useState(false);
  const [currency, setCurrency] = useState("USD - US Dollar");
  const [frequency, setFrequency] = useState("Weekly");

  function toggle(key: keyof typeof toggles) {
    setToggles((p) => ({ ...p, [key]: !p[key] }));
  }

  return (
    <div className="h-screen bg-gray-50">
      {/* Topbar stays above sidebar */}
      <AdminTopbar />

      <div className="flex">
        <AdminSidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          items={adminNavItems}
        />

        <main className="flex-1 px-4 md:px-6 py-6">
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

            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Platform Settings
              </h1>
              <p className="mt-1 text-md text-gray-500">
                Configure platform-wide settings and preferences
              </p>
            </div>
          </div>

          <div className="max-w-5xl space-y-6">
            {/* GENERAL */}
            <SettingSection
              icon={<IconGlobal />}
              title="General Settings"
              subtitle="Platform-wide configurations"
              tone="blue"
            >
              <SettingGrid>
                <SettingField label="Platform Name" placeholder="Found It" />
                <SettingField
                  label="Support Email"
                  placeholder="support@foundit.com"
                />

                <SettingDropdown
                  label="Default Currency"
                  value={currency}
                  open={currencyOpen}
                  onToggle={() => setCurrencyOpen(!currencyOpen)}
                  onSelect={(v) => {
                    setCurrency(v);
                    setCurrencyOpen(false);
                  }}
                  options={["USD - US Dollar", "EUR - Euro", "KHR - Riel"]}
                />

                <SettingToggle
                  label="Maintenance Mode"
                  desc="Disable platform access for maintenance"
                  value={toggles.maintenance}
                  onToggle={() => toggle("maintenance")}
                />
              </SettingGrid>
            </SettingSection>

            {/* COMMISSION */}
            <SettingSection
              icon={<IconMoney />}
              title="Commission & Payments"
              subtitle="Configure commission rates and payment processing"
              tone="green"
            >
              <SettingGrid>
                <SettingField
                  label="Freelancer Commission"
                  placeholder="15"
                  rightSuffix="%"
                />
                <SettingField
                  label="Client Commission"
                  placeholder="5"
                  rightSuffix="%"
                />
                <SettingField
                  label="Seller Commission"
                  placeholder="10"
                  rightSuffix="%"
                />
                <SettingField
                  label="Minimum Payout Amount"
                  placeholder="5"
                  leftPrefix="$"
                />
              </SettingGrid>
            </SettingSection>

            {/* VERIFICATION */}
            <SettingSection
              icon={<IconShield />}
              title="Verification & Approval"
              subtitle="Manage user verification requirements"
              tone="purple"
            >
              <SettingGrid>
                <SettingToggle
                  label="Email Verification"
                  desc="Require users to verify email"
                  value={toggles.emailVerify}
                  onToggle={() => toggle("emailVerify")}
                />
                <SettingToggle
                  label="Phone Verification"
                  desc="Require phone number verification"
                  value={toggles.phoneVerify}
                  onToggle={() => toggle("phoneVerify")}
                />
                <SettingToggle
                  label="Identity Verification (eKYC)"
                  desc="Require ID verification for sellers"
                  value={toggles.ekyc}
                  onToggle={() => toggle("ekyc")}
                />
                <SettingToggle
                  label="Auto-Approve Products"
                  desc="Automatically approve new products"
                  value={toggles.autoApprove}
                  onToggle={() => toggle("autoApprove")}
                />
              </SettingGrid>
            </SettingSection>

            {/* NOTIFICATIONS */}
            <SettingSection
              icon={<IconBell />}
              title="Notification Settings"
              subtitle="Control how notifications are sent to users"
              tone="orange"
            >
              <SettingGrid>
                <SettingToggle
                  label="Email Notifications"
                  desc="Send system emails to users"
                  value={toggles.emailNotif}
                  onToggle={() => toggle("emailNotif")}
                />
                <SettingToggle
                  label="Push Notifications"
                  desc="Send browser push notifications"
                  value={toggles.pushNotif}
                  onToggle={() => toggle("pushNotif")}
                />
                <SettingToggle
                  label="SMS Notifications"
                  desc="Send SMS alerts for critical events"
                  value={toggles.smsNotif}
                  onToggle={() => toggle("smsNotif")}
                />
                <SettingDropdown
                  label="Notification Frequency"
                  value={frequency}
                  open={frequencyOpen}
                  onToggle={() => setFrequencyOpen(!frequencyOpen)}
                  onSelect={(v) => {
                    setFrequency(v);
                    setFrequencyOpen(false);
                  }}
                  options={["Weekly", "Daily", "Real-time"]}
                />
              </SettingGrid>
            </SettingSection>

            {/* SECURITY */}
            <SettingSection
              icon={<IconLock />}
              title="Security Settings"
              subtitle="Configure platform security and access control"
              tone="red"
            >
              <SettingGrid>
                <SettingToggle
                  label="Two-Factor Authentication"
                  desc="Enable 2FA for admin accounts"
                  value={toggles.twoFA}
                  onToggle={() => toggle("twoFA")}
                />

                <SettingField label="Max Login Attempts" placeholder="5" />
                <SettingField
                  label="Session Timeout (minutes)"
                  placeholder="30"
                />
              </SettingGrid>
            </SettingSection>

            {/* Save (static) */}
            <div className="flex justify-end">
              <div
                role="button"
                tabIndex={0}
                onClick={() => {}}
                onKeyDown={(e) => handleKeyboardActivate(e, () => {})}
                className="rounded-md bg-fuchsia-600 px-4 py-2 text-sm text-white cursor-pointer hover:bg-fuchsia-700 select-none"
              >
                Save All Settings
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
