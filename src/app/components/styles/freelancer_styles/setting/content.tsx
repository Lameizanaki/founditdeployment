"use client";

import React from "react";
import {
  Dropdown,
  IconDollar,
  Modal,
  Toggle,
  handleKeyboardActivate,
} from "@/app/components/styles/freelancer_styles/setting/ui";

import {
  TabKey,
  overviewMock,
  proposalsMock,
  earningMock,
  notificationMock,
  billingMock,
  accountMock,
  privacyMock,
  securityMock,
  BlockedUser,
} from "@/app/components/styles/freelancer_styles/setting/mockData";

import {
  IconMoney,
  IconBriefcase,
  IconCircleCheck,
  IconClock,
  IconCalendar,
  IconBolt,
  IconShield,
  IconStar,
  IconMessage,
  IconSearch,
  IconWallet,
  IconBank,
  IconPaypal,
  IconCard,
  IconPlus,
  IconPencil,
  IconTrash,
  IconLock,
  IconDevice,
  IconWarning,
  IconApps,
  IconDrive,
  IconGithub,
  IconFigma,
  IconSlack,
} from "@/app/components/styles/freelancer_styles/setting/icons";

function CardWrap({
  title,
  children,
  right,
  
}: {
  title?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      {(title || right) && (
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">{title}</div>
          {right}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  defaultValue,
  disabled,
  type = "text",
  inputMode,
  pattern,
}: {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
}) {
  return (
    <div>
      <div className="text-xs font-medium text-gray-700">{label}</div>
      <input
        className={[
          "mt-2 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none",
          "focus:ring-2 focus:ring-[#4F39F6] focus:border-[#4F39F6]",
          disabled ? "opacity-70 cursor-not-allowed" : "",
        ].join(" ")}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        type={type}
        inputMode={inputMode}
        pattern={pattern}
      />
      
    </div>
  );
}

function PrimaryBtn({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) =>
        disabled ? undefined : handleKeyboardActivate(e, () => onClick?.())
      }
      className={[
        "px-4 py-2 rounded-md text-sm font-medium",
        disabled
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-[#4F39F6] text-white hover:opacity-95",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function GhostBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => handleKeyboardActivate(e, () => onClick?.())}
      className="px-4 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
    >
      {children}
    </div>
  );
}

function IconTile({
  tone = "purple",
  children,
}: {
  tone?: "purple" | "blue" | "green" | "amber" | "red" | "gray";
  children: React.ReactNode;
}) {
  const toneMap: Record<string, string> = {
    purple: "bg-[#4F39F6]/10 text-[#4F39F6]",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-red-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      className={[
        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
        toneMap[tone],
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function Content({
  activeTab,
  onOpenAddPayment,
  onOpenUnblock,

  blockedUsers,
  setBlockedUsers,

  unblockOpen,
  setUnblockOpen,
  unblockTargetId,
  setUnblockTargetId,

  addPayOpen,
  setAddPayOpen,
}: {
  activeTab: TabKey;

  onOpenAddPayment: () => void;
  onOpenUnblock: (id: string) => void;

  blockedUsers: BlockedUser[];
  setBlockedUsers: (v: BlockedUser[]) => void;

  unblockOpen: boolean;
  setUnblockOpen: (v: boolean) => void;
  unblockTargetId: string | null;
  setUnblockTargetId: (v: string | null) => void;

  addPayOpen: boolean;
  setAddPayOpen: (v: boolean) => void;
}) {
  // ---------- Proposals state ----------
  const [jobAlertsOn, setJobAlertsOn] = React.useState(true);
  const [alertFrequency, setAlertFrequency] = React.useState("Real-time");
  const [minSpend, setMinSpend] = React.useState("$1,000+");
  const [verifiedOnly, setVerifiedOnly] = React.useState(false);

  // ---------- Earnings state ----------
  const [payoutSchedule, setPayoutSchedule] = React.useState(
    "Weekly (Every Monday)"
  );
  const [preferredCurrency, setPreferredCurrency] = React.useState("USD");
  const [minPayout, setMinPayout] = React.useState("10"); // number-only

  // ---------- Notification state ----------
  const [channels, setChannels] = React.useState(notificationMock.channels);
  const [events, setEvents] = React.useState(notificationMock.events);
  const [quietHours, setQuietHours] = React.useState(
    notificationMock.quietHours
  );

  // ---------- Privacy state ----------
  const [visibility, setVisibility] = React.useState("Public");
  const [allowDirect, setAllowDirect] = React.useState("Anyone");

  const [showOnline, setShowOnline] = React.useState(true);
  const [showEarnings, setShowEarnings] = React.useState(false);
  const [searchIndexing, setSearchIndexing] = React.useState(true);
  const [aiDisclosure, setAiDisclosure] = React.useState(false);
  const [hideProposalCount, setHideProposalCount] = React.useState(false);

  // ---------- Security state ----------
  const [authApp, setAuthApp] = React.useState(true);
  const [smsBackup, setSmsBackup] = React.useState(false);
  const [passkeys, setPasskeys] = React.useState(false);
  const [loginAlerts, setLoginAlerts] = React.useState(true);

  // ---------- Add Payment modal selection (UI only) ----------
  const [payType, setPayType] = React.useState<
    "card" | "bank" | "paypal" | "wallet"
  >("card");

  const unblockTarget = unblockTargetId
    ? blockedUsers.find((u) => u.id === unblockTargetId) || null
    : null;

  function closeUnblock() {
    setUnblockOpen(false);
    setUnblockTargetId(null);
  }

  return (
    <div className="space-y-5">
      {/* ===================== OVERVIEW ===================== */}
      {activeTab === "overview" && (
        <>
          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {overviewMock.stats.map((s) => {
              const icon =
                s.label === "Total Earnings" ? (
                  <IconMoney /> // SVG: Overview stat card - Total Earnings icon (left tile)
                ) : s.label === "Active Projects" ? (
                  <IconBriefcase /> // SVG: Overview stat card - Active Projects icon (left tile)
                ) : s.label === "Completed Jobs" ? (
                  <IconCircleCheck /> // SVG: Overview stat card - Completed Jobs icon (left tile)
                ) : (
                  <IconClock /> // SVG: Overview stat card - Hours Logged icon (left tile)
                );

              const tone =
                s.label === "Total Earnings"
                  ? "purple"
                  : s.label === "Active Projects"
                  ? "blue"
                  : s.label === "Completed Jobs"
                  ? "green"
                  : "amber";

              return (
                <div
                  key={s.label}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 w-full"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* left */}
                    <div className="flex items-center gap-3 min-w-0">
                      <IconTile tone={tone as any}>
                        <span className="text-current">{icon}</span>
                      </IconTile>

                      <div className="min-w-0">
                        {/* Force single-line label */}
                        <div className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                          {s.label}
                        </div>

                        <div className="mt-1 text-lg font-semibold text-gray-900 whitespace-nowrap">
                          {s.value}
                        </div>
                      </div>
                    </div>

                    {/* right hint - locked to top-right */}
                    <div className="text-xs text-green-600 whitespace-nowrap flex-shrink-0 leading-none pt-1">
                      {s.hint}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Upcoming deadlines */}
            <CardWrap title="Upcoming Deadlines">
              <div className="space-y-3">
                {overviewMock.deadlines.map((d) => {
                  const barTone =
                    d.tone === "red"
                      ? "bg-red-500"
                      : d.tone === "amber"
                      ? "bg-amber-500"
                      : "bg-blue-500";

                  const rowBg =
                    d.tone === "red"
                      ? "bg-red-50 border-red-100"
                      : d.tone === "amber"
                      ? "bg-amber-50 border-amber-100"
                      : "bg-blue-50 border-blue-100";

                  const iconTone =
                    d.tone === "red"
                      ? "text-red-700 bg-red-100"
                      : d.tone === "amber"
                      ? "text-amber-700 bg-amber-100"
                      : "text-blue-700 bg-blue-100";

                  return (
                    <div
                      key={d.title}
                      className={["rounded-xl border p-4", rowBg].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className={[
                              "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              iconTone,
                            ].join(" ")}
                          >
                            <IconCalendar />{" "}
                            {/* SVG: Overview > Upcoming Deadlines row icon (left tile) */}
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">
                              {d.title}
                            </div>
                            <div className="mt-1 text-xs text-gray-600">
                              {d.due}
                            </div>
                          </div>
                        </div>

                        <div className="text-xs text-gray-600">
                          {d.percent}%
                        </div>
                      </div>

                      <div className="mt-3 h-2 w-full rounded-full bg-white/70 border border-black/5 overflow-hidden">
                        <div
                          className={["h-full rounded-full", barTone].join(" ")}
                          style={{ width: `${d.percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardWrap>

            {/* Recent activity */}
            <CardWrap title="Recent Activity">
              <div className="space-y-3">
                {overviewMock.activity.map((a) => {
                  const icon =
                    a.title === "Profile updated" ? (
                      <IconBolt /> // SVG: Overview > Recent Activity item icon (Profile updated)
                    ) : a.title === "Payment received" ? (
                      <IconDollar /> // SVG: Overview > Recent Activity item icon (Payment received)
                    ) : a.title === "Verification badge earned" ? (
                      <IconStar /> // SVG: Overview > Recent Activity item icon (Badge earned)
                    ) : (
                      <IconShield /> // SVG: Overview > Recent Activity item icon (Security alert)
                    );

                  const iconTone =
                    a.tone === "red"
                      ? "text-red-700 bg-red-100"
                      : a.tone === "green"
                      ? "text-green-700 bg-green-100"
                      : a.tone === "amber"
                      ? "text-amber-700 bg-amber-100"
                      : "text-blue-700 bg-blue-100";

                  return (
                    <div
                      key={a.title}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className={[
                              "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              iconTone,
                            ].join(" ")}
                          >
                            <span className="text-current">{icon}</span>
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">
                              {a.title}
                            </div>
                            <div className="mt-1 text-xs text-gray-600">
                              {a.desc}
                            </div>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500">{a.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardWrap>
          </div>

          {/* Monthly summary */}
          <CardWrap title="This Month's Summary">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {overviewMock.summary.map((s) => {
                const tileTone =
                  s.tone === "blue"
                    ? "blue"
                    : s.tone === "green"
                    ? "green"
                    : s.tone === "purple"
                    ? "purple"
                    : "amber";

                const icon =
                  s.label === "Projects Started" ? (
                    <IconBriefcase /> // SVG: Overview > Monthly Summary card icon (Projects Started)
                  ) : s.label === "Projects Completed" ? (
                    <IconCircleCheck /> // SVG: Overview > Monthly Summary card icon (Projects Completed)
                  ) : s.label === "Messages Sent" ? (
                    <IconMessage /> // SVG: Overview > Monthly Summary card icon (Messages Sent)
                  ) : (
                    <IconStar /> // SVG: Overview > Monthly Summary card icon (Avg Rating)
                  );

                return (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <div className="flex items-center gap-3">
                      <IconTile tone={tileTone as any}>
                        <span className="text-current">{icon}</span>
                      </IconTile>

                      <div className="min-w-0">
                        <div className="text-xs text-gray-500">{s.label}</div>
                        <div className="mt-1 text-lg font-semibold text-gray-900">
                          {s.value}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardWrap>
        </>
      )}

      {/* ===================== PROPOSALS ===================== */}
      {activeTab === "proposals" && (
        <div className="space-y-5">
          <CardWrap
            title="Job Search Preferences"
            right={<div className="flex items-center gap-2"></div>}
          >
            <div className="text-xs text-gray-500">
              Control which jobs you see and receive alerts for
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5">
              <div className="flex items-center gap-2">
                <span className="text-gray-800">
                  <IconBolt />{" "}
                  {/* SVG: Proposals section title icon (Job Alert Settings) */}
                </span>
                <div className="text-xs font-semibold text-gray-900">
                  Job Alert Settings
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Enable Job Alerts
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Receive notifications for matching jobs
                    </div>
                  </div>
                  <Toggle on={jobAlertsOn} setOn={setJobAlertsOn} />
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Dropdown
                    label="Alert Frequency"
                    value={alertFrequency}
                    options={["Real-time", "Daily", "Weekly"]}
                    onChange={setAlertFrequency}
                  />

                  <div>
                    <div className="text-xs font-medium text-gray-700">
                      Alert Keywords
                    </div>
                    <input
                      className="mt-2 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-[#4F39F6]"
                      placeholder="react, typescript, frontend"
                      defaultValue={proposalsMock.keywords}
                      inputMode="text"
                    />
                    <div className="mt-1 text-[11px] text-gray-500">
                      Separate keywords with commas
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="text-xs font-semibold text-gray-900">
                    Minimum Client Requirements
                  </div>

                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Dropdown
                      label="Minimum Client Spend"
                      value={minSpend}
                      options={["No minimum", "$1,000+", "$10,000+"]}
                      onChange={setMinSpend}
                    />

                    {/* Not a dropdown (your rule) */}
                    <div>
                      <div className="text-xs font-medium text-gray-700">
                        Client History Required
                      </div>
                      <div className="mt-2 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900">
                        Any client
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                          <IconShield />{" "}
                          {/* SVG: Proposals toggle row icon (Payment Verified Only) */}
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Payment Method Verified Only
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Hide jobs from unverified clients
                          </div>
                        </div>
                      </div>
                      <Toggle on={verifiedOnly} setOn={setVerifiedOnly} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardWrap>
        </div>
      )}

      {/* ===================== EARNINGS & PAYOUTS ===================== */}
      {activeTab === "earning_payout" && (
        <div className="space-y-5">
          <CardWrap title="Payment Methods">
            <div className="text-xs text-gray-500">
              Manage how you receive your earnings
            </div>

            <div className="mt-4 rounded-xl border border-[#4F39F6]/25 bg-[#4F39F6]/5 p-4 flex items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#4F39F6] flex-shrink-0">
                  <IconDollar />{" "}
                  {/* SVG: Earnings balance card icon (left tile) */}
                </div>

                <div>
                  <div className="text-xs text-gray-500">Available Balance</div>
                  <div className="mt-1 text-lg font-semibold text-[#4F39F6]">
                    {earningMock.balance}
                  </div>
                  <div className="mt-1 text-[11px] text-gray-500">
                    In Review: $450.00 • Next Payout: Feb 26
                  </div>
                </div>
              </div>

              {/* Withdraw does nothing (your rule) */}
              <PrimaryBtn onClick={() => {}} disabled>
                Withdraw
              </PrimaryBtn>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2">
                <span className="text-gray-800">
                  <IconBank />{" "}
                  {/* SVG: Earnings section title icon (Payout Methods) */}
                </span>
                <div className="text-xs font-semibold text-gray-900">
                  Payout Methods
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-gray-200 bg-white overflow-hidden">
                {earningMock.methods.map((m) => {
                  const rowIcon = m.title.toLowerCase().includes("bank") ? (
                    <IconDollar /> // SVG: Earnings payout method row icon (Bank)
                  ) : (
                    <IconCard /> // SVG: Earnings payout method row icon (PayPal)
                  );

                  return (
                    <div
                      key={m.title}
                      className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                          {rowIcon}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-semibold text-gray-900">
                              {m.title}
                            </div>
                            {m.badge ? (
                              <div className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#4F39F6]/10 text-[#4F39F6]">
                                {m.badge}
                              </div>
                            ) : null}
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            {m.meta}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        Edit
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Dropdown
                  label="Payout Schedule"
                  value={payoutSchedule}
                  options={[
                    "Weekly (Every Monday)",
                    "Real-time",
                    "Daily (Every 8AM)",
                  ]}
                  onChange={setPayoutSchedule}
                />

                <div>
                  <div className="text-xs font-medium text-gray-700">
                    Minimum Payout Threshold
                  </div>
                  <div className="relative mt-2">
                    <input
                      className="w-full rounded-md border border-gray-200 bg-gray-50 pl-9 pr-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#4F39F6] focus:border-[#4F39F6]"
                      placeholder="10"
                      value={minPayout}
                      onChange={(e) => {
                        const next = e.target.value.replace(/[^0-9]/g, "");
                        setMinPayout(next);
                      }}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <IconDollar />{" "}
                      {/* SVG: Earnings threshold input icon (left inside input) */}
                    </div>
                  </div>
                  <div className="mt-1 text-[11px] text-gray-500">
                    Payouts occur when your balance reaches this amount
                  </div>
                </div>

                <Dropdown
                  label="Preferred Currency"
                  value={preferredCurrency}
                  options={earningMock.currencyOptions}
                  onChange={setPreferredCurrency}
                />
              </div>
            </div>

            {/* Tax Residence removed (your rule) */}
          </CardWrap>
        </div>
      )}

      {/* ===================== NOTIFICATIONS ===================== */}
      {activeTab === "notification" && (
        <div className="space-y-5">
          <CardWrap title="Notification Preferences">
            <div className="text-xs text-gray-500">
              Control how and when you receive work-related notifications
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2">
                <div className="text-xs font-semibold text-gray-900">
                  Notification Channels
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-gray-200 bg-white overflow-hidden">
                {channels.map((c, idx) => (
                  <div
                    key={c.label}
                    className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900">
                          {c.label}
                        </div>
                        {c.meta ? (
                          <div className="mt-1 text-xs text-gray-500">
                            {c.meta}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <Toggle
                      on={c.on}
                      setOn={(v) => {
                        const next = [...channels];
                        next[idx] = { ...next[idx], on: v };
                        setChannels(next);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5">
              <div className="flex items-center gap-2">
                <div className="text-xs font-semibold text-gray-900">
                  Event Notifications
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-gray-200 bg-white overflow-hidden">
                {events.map((e, idx) => (
                  <div
                    key={e.label}
                    className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900">
                          {e.label}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {e.meta}
                        </div>
                      </div>
                    </div>

                    <Toggle
                      on={e.on}
                      setOn={(v) => {
                        const next = [...events];
                        next[idx] = { ...next[idx], on: v };
                        setEvents(next);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5">
              <div className="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <IconClock />{" "}
                    {/* SVG: Notifications quiet hours row icon (left tile) */}
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Quiet Hours / Do Not Disturb
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Push notifications muted during these hours (critical
                      alerts still go through)
                    </div>
                  </div>
                </div>

                <Toggle on={quietHours} setOn={setQuietHours} />
              </div>

              <div className="mt-4 w-auto flex text-center">
                <PrimaryBtn onClick={() => {}}>
                  Save Notification Settings
                </PrimaryBtn>
              </div>
            </div>
          </CardWrap>
        </div>
      )}

      {/* ===================== BILLING & PAYMENTS ===================== */}
      {activeTab === "billing" && (
        <div className="space-y-5">
          <CardWrap
            title="Payment Methods"
            right={
              <div
                role="button"
                tabIndex={0}
                onClick={onOpenAddPayment}
                onKeyDown={(e) => handleKeyboardActivate(e, onOpenAddPayment)}
                className="px-3 py-2 rounded-md bg-[#4F39F6]/10 text-[#4F39F6] text-sm font-medium hover:bg-[#4F39F6]/15"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#4F39F6]">
                    <IconPlus />{" "}
                    {/* SVG: Billing header action icon (Add Payment Method) */}
                  </span>
                  Add Payment Method
                </span>
              </div>
            }
          >
            <div className="text-xs text-gray-500">
              Manage cards and payment options for purchases
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
              {billingMock.savedMethods.map((m) => (
                <div
                  key={m.title}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconCard />{" "}
                      {/* SVG: Billing saved method row icon (left tile) */}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-semibold text-gray-900">
                          {m.title}
                        </div>
                        {m.badge ? (
                          <div className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#4F39F6]/10 text-[#4F39F6]">
                            {m.badge}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{m.meta}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                      Edit
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs text-red-500">
                      Remove
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-800">
                  <IconCard /> {/* SVG: Billing address section icon */}
                </span>
                <div className="text-xs font-semibold text-gray-900">
                  Billing Address
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  defaultValue={billingMock.address.firstName}
                />
                <Input
                  label="Last Name"
                  defaultValue={billingMock.address.lastName}
                />
                <Input
                  label="Street Address"
                  defaultValue={billingMock.address.street}
                />
                <Input label="City" defaultValue={billingMock.address.city} />
                <Input label="State" defaultValue={billingMock.address.state} />
                <Input
                  label="ZIP Code"
                  defaultValue={billingMock.address.zip}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-800">
                  <IconWarning /> {/* SVG: Upcoming charges section icon */}
                </span>
                <div className="text-xs font-semibold text-gray-900">
                  Upcoming Charges
                </div>
              </div>

              <div className="mt-1 text-xs text-gray-500">
                Scheduled payments and renewals
              </div>

              <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                {billingMock.charges.map((c) => (
                  <div
                    key={c.title}
                    className="px-4 py-3 flex items-center justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                        <IconCard />{" "}
                        {/* SVG: Upcoming charge row icon (left tile) */}
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {c.title}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {c.due}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-gray-900">
                      {c.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardWrap>

          {/* Add Payment Modal (one of the only working modals) */}
          <Modal
            open={addPayOpen}
            onClose={() => setAddPayOpen(false)}
            title="Add payment method"
            widthClass="max-w-xl"
          >
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="text-gray-700">
                  <IconLock />{" "}
                  {/* SVG: Add Payment modal subtitle icon (Secured & encrypted) */}
                </span>
                Secured &amp; encrypted
              </div>

              <div className="mt-4">
                <div className="text-xs font-medium text-gray-700">
                  Select payment method
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    {
                      k: "card",
                      t: "Card",
                      s: "Visa, Mastercard...",
                      ico: <IconCard />,
                    }, // SVG: Add Payment option icon (Card)
                    {
                      k: "bank",
                      t: "Bank account",
                      s: "ACH / SEPA",
                      ico: <IconBank />,
                    }, // SVG: Add Payment option icon (Bank)
                    {
                      k: "paypal",
                      t: "PayPal",
                      s: "Fast checkout",
                      ico: <IconPaypal />,
                    }, // SVG: Add Payment option icon (PayPal)
                    {
                      k: "wallet",
                      t: "Apple / Google Pay",
                      s: "Device wallet",
                      ico: <IconWallet />,
                    }, // SVG: Add Payment option icon (Wallet)
                  ].map((x) => {
                    const active = payType === (x.k as any);
                    return (
                      <div
                        key={x.k}
                        role="button"
                        tabIndex={0}
                        onClick={() => setPayType(x.k as any)}
                        onKeyDown={(e) =>
                          handleKeyboardActivate(e, () =>
                            setPayType(x.k as any)
                          )
                        }
                        className={[
                          "rounded-xl border p-4 bg-white",
                          active
                            ? "border-[#4F39F6] ring-2 ring-[#4F39F6]/20"
                            : "border-gray-200 hover:bg-gray-50",
                        ].join(" ")}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                            {x.ico}
                          </div>

                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">
                              {x.t}
                            </div>
                            <div className="mt-1 text-xs text-gray-500">
                              {x.s}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Placeholder inputs (your rule: user can input) */}
              <div className="mt-4 grid grid-cols-1 gap-4">
                <Input
                  label="Card number"
                  placeholder="1234 5678 9012 3456"
                  inputMode="numeric"
                  pattern="[0-9 ]*"
                />
                <Input label="Name on card" placeholder="John Doe" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry" placeholder="MM/YY" />
                  <Input
                    label="CVC"
                    placeholder="123"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>
              </div>

              <div className="mt-5 border-t border-gray-200 pt-4">
                <div className="text-xs font-semibold text-gray-900">
                  Billing address
                </div>

                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Country" placeholder="Cambodia" />
                  <Input label="Street address" placeholder="123 Main St" />
                  <Input label="City" placeholder="Phnom Penh" />
                  <Input label="State / Province" placeholder="Khan..." />
                  <Input
                    label="Postal code"
                    placeholder="12000"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                </div>

                <div className="mt-4 rounded-xl border border-[#4F39F6]/20 bg-[#4F39F6]/5 p-3 text-xs text-[#4F39F6] flex items-center gap-2">
                  <span className="text-[#4F39F6]">
                    <IconShield />{" "}
                    {/* SVG: Add Payment modal info badge icon */}
                  </span>
                  No extra fee. Charged in USD.
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <GhostBtn onClick={() => setAddPayOpen(false)}>Cancel</GhostBtn>
                <PrimaryBtn onClick={() => setAddPayOpen(false)}>
                  Save &amp; Continue
                </PrimaryBtn>
              </div>

              <div className="mt-5 text-[11px] text-gray-500 text-center">
                PCI-DSS &nbsp; • &nbsp; 256-bit SSL &nbsp; • &nbsp; Tokenized by
                Stripe
              </div>
            </div>
          </Modal>
        </div>
      )}

      {/* ===================== ACCOUNT ===================== */}
      {activeTab === "account" && (
        <div className="space-y-5">
          <CardWrap title="Profile Information">
            <div className="text-xs text-gray-500">
              Update your personal details and contact information
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Display Name"
                defaultValue={accountMock.profile.displayName}
              />
              <Input
                label="Handle (username)"
                defaultValue={accountMock.profile.handle}
                disabled
              />
              <Input
                label="Primary Email"
                defaultValue={accountMock.profile.primaryEmail}
                type="email"
              />
              <Input
                label="Backup Email (Recovery)"
                defaultValue={accountMock.profile.backupEmail}
                type="email"
              />
              <Input
                label="Phone Number"
                defaultValue={accountMock.profile.phone}
                inputMode="tel"
              />

              {/* Placeholder inputs (your note) */}
              <Input
                label="Country"
                defaultValue={accountMock.profile.country}
              />
              <Input
                label="Time Zone"
                defaultValue={accountMock.profile.timeZone}
              />
              <Input
                label="Language"
                defaultValue={accountMock.profile.language}
              />
            </div>

            <div className="mt-4 flex justify-end">
              <PrimaryBtn onClick={() => {}}>
                <span className="flex items-center gap-2">Save Changes</span>
              </PrimaryBtn>
            </div>
          </CardWrap>

          <CardWrap title="Active Sessions">
            <div className="text-xs text-gray-500">
              Manage devices where you&apos;re currently logged in
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
              {accountMock.sessions.map((s) => (
                <div
                  key={s.title}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconDevice />{" "}
                      {/* SVG: Account sessions row icon (left tile) */}
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">
                        {s.title}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{s.meta}</div>
                      <div className="mt-1 text-xs text-gray-500">{s.time}</div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">Sign Out</div>
                </div>
              ))}
            </div>
          </CardWrap>

          <CardWrap title="Blocked Users">
            <div className="text-xs text-gray-500">
              Manage users you&apos;ve blocked. They won&apos;t be able to
              contact you or see your job posts.
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
              {blockedUsers.map((u) => (
                <div
                  key={u.id}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={u.avatarSrc}
                      alt={u.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />

                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">
                        {u.name}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        {u.blockedAt}
                      </div>
                    </div>
                  </div>

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => onOpenUnblock(u.id)}
                    onKeyDown={(e) =>
                      handleKeyboardActivate(e, () => onOpenUnblock(u.id))
                    }
                    className="px-3 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50"
                    aria-label={`Unblock ${u.name}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="text-gray-800">
                        <IconWarning />{" "}
                        {/* SVG: Blocked users row action icon (Unblock) */}
                      </span>
                      Unblock
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-green-200 text-green-700 flex items-center justify-center flex-shrink-0">
                <IconShield /> {/* SVG: Blocked users info box icon */}
              </div>
              <div>
                <div className="text-xs font-semibold text-green-800">
                  About blocking users
                </div>
                <div className="mt-1 text-xs text-green-700">
                  Blocked users cannot send you messages, apply to your jobs, or
                  view your active job posts. This action is reversible.
                </div>
              </div>
            </div>
          </CardWrap>

          {/* Unblock Modal (one of the only working modals) */}
          <Modal
            open={unblockOpen}
            onClose={closeUnblock}
            title={
              unblockTarget ? `Unblock ${unblockTarget.name}?` : "Unblock user?"
            }
            widthClass="max-w-md"
          >
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0">
                  <IconWarning /> {/* SVG: Unblock modal icon (left of text) */}
                </div>
                <div className="text-sm text-gray-600">
                  This user will be able to contact you, apply to your jobs, and
                  see your job posts again. You can always block them again
                  later.
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end gap-2">
                <GhostBtn onClick={closeUnblock}>Cancel</GhostBtn>

                <PrimaryBtn
                  onClick={() => {
                    if (!unblockTargetId) return;
                    setBlockedUsers(
                      blockedUsers.filter((x) => x.id !== unblockTargetId)
                    );
                    closeUnblock();
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="text-white">
                      <IconCircleCheck />{" "}
                      {/* SVG: Unblock modal confirm button icon */}
                    </span>
                    Unblock User
                  </span>
                </PrimaryBtn>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {/* ===================== SECURITY ===================== */}
      {activeTab === "security" && (
        <div className="space-y-5">
          <CardWrap title="Password">
            <div className="text-xs text-gray-500">
              Change your password and ensure it&apos;s strong
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
              <Input label="Current Password" placeholder="" type="password" />
              <Input label="New Password" placeholder="" type="password" />
              <div>
                <div className="text-xs font-medium text-gray-700">
                  Password strength
                </div>
                <div className="mt-2 h-2 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                  <div className="h-full w-[85%] bg-[#4F39F6]" />
                </div>
                <div className="mt-1 text-xs text-gray-500">Strong</div>
              </div>
              <Input
                label="Confirm New Password"
                placeholder=""
                type="password"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <PrimaryBtn onClick={() => {}}>
                <span className="inline-flex items-center gap-2">
                  <span className="text-white">
                    <IconLock />{" "}
                    {/* SVG: Security update password button icon */}
                  </span>
                  Update Password
                </span>
              </PrimaryBtn>
            </div>
          </CardWrap>

          <CardWrap title="Two-Factor Authentication (2FA)">
            <div className="text-xs text-gray-500">
              Add an extra layer of security to your account
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
              {[
                {
                  t: "Authenticator App",
                  d: "Use an app like Google Authenticator or Authy",
                  on: authApp,
                  setOn: setAuthApp,
                  ico: <IconShield />, // SVG: Security 2FA row icon (Authenticator App)
                },
                {
                  t: "SMS Backup",
                  d: "Receive codes via text message as a backup",
                  on: smsBackup,
                  setOn: setSmsBackup,
                  ico: <IconMessage />, // SVG: Security 2FA row icon (SMS)
                },
                {
                  t: "Passkeys",
                  d: "Use biometric authentication with your device",
                  on: passkeys,
                  setOn: setPasskeys,
                  ico: <IconDevice />, // SVG: Security 2FA row icon (Passkeys)
                },
                {
                  t: "Login Alerts",
                  d: "Get notified of new login attempts",
                  on: loginAlerts,
                  setOn: setLoginAlerts,
                  ico: <IconWarning />, // SVG: Security 2FA row icon (Login Alerts)
                },
              ].map((row) => (
                <div
                  key={row.t}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                      {row.ico}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">
                        {row.t}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{row.d}</div>
                    </div>
                  </div>
                  <Toggle on={row.on} setOn={row.setOn} />
                </div>
              ))}
            </div>
          </CardWrap>

          <CardWrap title="Trusted Devices">
            <div className="text-xs text-gray-500">
              Devices that can bypass 2FA verification
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
              {securityMock.devices.map((d) => (
                <div
                  key={d.title}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconDevice />{" "}
                      {/* SVG: Security trusted device row icon */}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">
                        {d.title}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{d.meta}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{d.action}</div>
                </div>
              ))}
            </div>
          </CardWrap>

          <CardWrap title="Security Events">
            <div className="text-xs text-gray-500">
              Recent security-related activity on your account
            </div>

            <div className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
              {securityMock.events.map((e) => (
                <div
                  key={e.title}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconShield /> {/* SVG: Security events row icon */}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900">
                        {e.title}
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{e.meta}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardWrap>
        </div>
      )}

      {/* ===================== PRIVACY ===================== */}

      {activeTab === "privacy" && (
        <div className="space-y-5">
          <CardWrap title="Profile Visibility">
            <div className="text-xs text-gray-500">
              Control who can see your profile and information
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">
                    <IconApps />{" "}
                    {/* SVG: Privacy section icon (Profile Visibility) */}
                  </span>
                  <div className="text-xs font-semibold text-gray-900">
                    Visibility
                  </div>
                </div>

                <div className="mt-3">
                  <Dropdown
                    label="Profile Visibility"
                    value={visibility}
                    options={privacyMock.visibilityOptions}
                    onChange={setVisibility}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <IconMessage />{" "}
                    {/* SVG: Privacy toggle row icon (Show Online Status) */}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Show Online Status
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Let others know when you&apos;re active
                    </div>
                  </div>
                </div>

                <Toggle on={showOnline} setOn={setShowOnline} />
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <IconMoney />{" "}
                    {/* SVG: Privacy toggle row icon (Show Earnings) */}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Show Earnings
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Display your public earnings on your profile
                    </div>
                  </div>
                </div>

                <Toggle on={showEarnings} setOn={setShowEarnings} />
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <IconSearch />{" "}
                    {/* SVG: Privacy toggle row icon (Search Engine Indexing) */}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Search Engine Indexing
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Turning off indexing may reduce external traffic but
                      improves privacy
                    </div>
                  </div>
                </div>

                <Toggle on={searchIndexing} setOn={setSearchIndexing} />
              </div>

              <div className="md:col-span-2 rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <IconStar />{" "}
                    {/* SVG: Privacy row icon (AI Content Disclosure Badge) */}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-900">
                      AI Content Disclosure Badge
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Show a badge indicating when AI was used to create content
                    </div>
                  </div>
                </div>

                <Toggle on={aiDisclosure} setOn={setAiDisclosure} />
              </div>
            </div>
          </CardWrap>

          <CardWrap title="Communication Preferences">
            <div className="text-xs text-gray-500">
              Manage who can contact you
            </div>

            <div className="mt-4 max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-800">
                  <IconMessage />{" "}
                  {/* SVG: Privacy section icon (Allow Direct Messages From) */}
                </span>
                <div className="text-xs font-semibold text-gray-900">
                  Direct Messages
                </div>
              </div>

              <Dropdown
                label="Allow Direct Messages From"
                value={allowDirect}
                options={privacyMock.directMsgOptions}
                onChange={setAllowDirect}
              />
            </div>
          </CardWrap>

          <CardWrap title="Freelancer Privacy">
            <div className="rounded-xl border border-gray-200 bg-white p-4 flex items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center flex-shrink-0">
                  <IconShield />{" "}
                  {/* SVG: Privacy toggle row icon (Hide Proposal Count) */}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Hide Proposal Count
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Don&apos;t show how many proposals you&apos;ve submitted
                  </div>
                </div>
              </div>

              <Toggle on={hideProposalCount} setOn={setHideProposalCount} />
            </div>
          </CardWrap>
        </div>
      )}

      {/* ===================== CONNECTED APPS ===================== */}
      {activeTab === "apps" && (
        <div className="space-y-5">
          <CardWrap title="Connected Apps">
            <div className="text-xs text-gray-500">
              OAuth scopes are shown for audit investigation. You can revoke
              access at any time.
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">
                    <IconApps />{" "}
                    {/* SVG: Apps section icon (Calendar Integration) */}
                  </span>
                  <div className="text-sm font-semibold text-gray-900">
                    Calendar Integration
                  </div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Sync deadlines and schedule meetings
                </div>

                <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconCalendar />{" "}
                      {/* SVG: Apps row icon (Google Calendar) */}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Google Calendar
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Sync deadlines and meetings
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Disconnect</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">
                    <IconDrive /> {/* SVG: Apps section icon (File Storage) */}
                  </span>
                  <div className="text-sm font-semibold text-gray-900">
                    File Storage
                  </div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Connect cloud storage services
                </div>

                <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconDrive /> {/* SVG: Apps row icon (Google Drive) */}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Google Drive
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Access and share files
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Disconnect</div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <GhostBtn onClick={() => {}}>Connect Dropbox</GhostBtn>
                  <GhostBtn onClick={() => {}}>Connect OneDrive</GhostBtn>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">
                    <IconGithub />{" "}
                    {/* SVG: Apps section icon (Development & Design) */}
                  </span>
                  <div className="text-sm font-semibold text-gray-900">
                    Development &amp; Design
                  </div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Connect your development and design tools
                </div>

                <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconGithub /> {/* SVG: Apps row icon (GitHub) */}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        GitHub
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Link repositories and commits
                      </div>
                    </div>
                  </div>
                  <GhostBtn onClick={() => {}}>Connect</GhostBtn>
                </div>

                <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconGithub /> {/* SVG: Apps row icon (Figma) */}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Figma
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Share design files
                      </div>
                    </div>
                  </div>
                  <GhostBtn onClick={() => {}}>Connect</GhostBtn>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">
                    <IconMessage /> {/* SVG: Apps section icon (Communication) */}
                  </span>
                  <div className="text-sm font-semibold text-gray-900">
                    Communication
                  </div>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  Sync with communication platforms
                </div>

                <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                      <IconMessage /> {/* SVG: Apps row icon (Slack) */}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Slack
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Get notifications in Slack channels
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Disconnect</div>
                </div>

                {/* Channel mapping not dropdown (your rule) */}
                <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-xs font-semibold text-gray-900">
                    Channel Mapping
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900">
                      #onboarding
                    </div>
                    <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900">
                      Order updates
                    </div>
                  </div>

                  <div className="mt-3">
                    <GhostBtn onClick={() => {}}>Connect Discord</GhostBtn>
                  </div>
                </div>
              </div>
            </div>
          </CardWrap>
        </div>
      )}
    </div>
  );
}
