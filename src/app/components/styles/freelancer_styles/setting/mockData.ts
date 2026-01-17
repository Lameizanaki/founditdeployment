export type TabKey =
  | "overview"
  | "profile_rates"
  | "proposals"
  | "earning_payout"
  | "workdiary"
  | "badge"
  | "notification"
  | "billing"
  | "account"
  | "security"
  | "privacy"
  | "apps";

export type TabItem = {
  key: TabKey;
  label: string;
  iconKey:
    | "overview"
    | "proposals"
    | "earning"
    | "badge"
    | "notification"
    | "billing"
    | "account"
    | "security"
    | "privacy"
    | "apps";
};

export const tabItems: TabItem[] = [
  { key: "overview", label: "Overview", iconKey: "overview" },
  { key: "proposals", label: "Proposals", iconKey: "proposals" },
  { key: "earning_payout", label: "Earnings & Payouts", iconKey: "earning" },
  { key: "notification", label: "Notifications", iconKey: "notification" },
  { key: "billing", label: "Billing & Payments", iconKey: "billing" },
  { key: "account", label: "Account", iconKey: "account" },
  { key: "security", label: "Security", iconKey: "security" },
  { key: "privacy", label: "Privacy", iconKey: "privacy" },
  { key: "apps", label: "Connected Apps", iconKey: "apps" },
];

// ---------- OVERVIEW ----------
export const overviewMock = {
  stats: [
    { label: "Total Earnings", value: "$24,580", hint: "+12.5%" },
    { label: "Active Projects", value: "8", hint: "+2 this month" },
    { label: "Completed Jobs", value: "47", hint: "+5 this month" },
    { label: "Hours Logged", value: "342", hint: "+18 this week" },
  ],
  deadlines: [
    {
      title: "E-commerce Website Redesign",
      due: "Due in 2 days • Mar 1, 2024",
      percent: 65,
      tone: "red",
    },
    {
      title: "SEO Optimization & Content Strategy",
      due: "Due in 5 days • Apr 10, 2024",
      percent: 45,
      tone: "amber",
    },
    {
      title: "Video Editing for Marketing Campaign",
      due: "Due in 7 days • Mar 5, 2024",
      percent: 95,
      tone: "blue",
    },
  ],
  activity: [
    {
      title: "Profile updated",
      desc: "You updated your hourly rate to $85/hr",
      time: "2 hours ago",
      tone: "blue",
    },
    {
      title: "Payment received",
      desc: "Payment of $2,500 for E-commerce Website Redesign",
      time: "1 day ago",
      tone: "green",
    },
    {
      title: "Verification badge earned",
      desc: 'You earned the "Top Rated" badge',
      time: "3 days ago",
      tone: "amber",
    },
    {
      title: "Security alert",
      desc: "New login from Chrome on Windows",
      time: "5 days ago",
      tone: "red",
    },
  ],
  summary: [
    { label: "Projects Started", value: "3", tone: "blue" },
    { label: "Projects Completed", value: "5", tone: "green" },
    { label: "Messages Sent", value: "247", tone: "purple" },
    { label: "Avg. Rating", value: "4.9", tone: "amber" },
  ],
};

// ---------- PROPOSALS ----------
export const proposalsMock = {
  savedSearches: [
    {
      title: "React Developer Jobs",
      meta: "Keywords: react, typescript, frontend • Budget: $50-$150/hr",
      alerts: "Daily Alerts",
    },
    {
      title: "Full-Stack Projects",
      meta: "Keywords: node.js, postgres, aws • Fixed: $5000+",
      alerts: "Alerts Off",
    },
  ],
  alertFrequencyOptions: ["Real-time", "Daily", "Weekly"],
  minSpendOptions: ["No minimum", "$1,000+", "$10,000+"],
  keywords: "react, typescript, frontend",
};

// ---------- EARNINGS ----------
export const earningMock = {
  balance: "$3,247.50",
  methods: [
    {
      title: "Direct to U.S. Bank",
      meta: "••••4321 (Chase)",
      badge: "Default",
    },
    { title: "PayPal", meta: "sarah.j@example.com", badge: "" },
  ],
  payoutScheduleOptions: ["Weekly (Every Monday)", "Real-time", "Daily (Every 8AM)"],
  currencyOptions: ["USD", "AUD", "KHR", "EUR", "GBP", "JPY"],
};

// ---------- NOTIFICATIONS ----------
export const notificationMock = {
  channels: [
    { label: "Email Notifications", meta: "sarah.j@example.com", on: true },
    { label: "Mobile Push Notifications", meta: "", on: true },
    { label: "In-App Notifications", meta: "", on: true },
    { label: "SMS Alerts (critical only)", meta: "", on: false },
  ],
  events: [
    { label: "Job Matches & Invites", meta: "Real-time alerts for matching jobs", on: true },
    { label: "Interview Requests", meta: "Client wants to interview you", on: true },
    { label: "Offers & Contracts", meta: "New offers and contract changes", on: true },
    { label: "Client Messages", meta: "New messages from clients", on: true },
    { label: "Proposal Status Updates", meta: "Viewed, declined, or shortlisted", on: true },
    { label: "Payment Notifications", meta: "Funded escrow, releases, refunds", on: true },
    { label: "Reviews & Feedback", meta: "New client feedback posted", on: true },
    { label: "Disputes & Issues", meta: "Dispute filed or resolved", on: true },
    { label: "Verification Reminders", meta: "Documents expiring soon", on: true },
  ],
  quietHours: true,
};

// ---------- BILLING ----------
export const billingMock = {
  savedMethods: [
    { title: "Visa ending in 4532", meta: "Expires 08/2026", badge: "Default" },
    { title: "Mastercard ending in 7821", meta: "Expires 12/2025", badge: "" },
    { title: "PayPal", meta: "sarah.j@example.com", badge: "" },
  ],
  address: {
    firstName: "Sarah",
    lastName: "Johnson",
    street: "123 Market St, Apt 4B",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
  },
  charges: [{ title: "Freelancer Plus Renewal", due: "Due Feb 26, 2024", price: "$14.99" }],
};

// ---------- ACCOUNT ----------
export type BlockedUser = {
  id: string;
  name: string;
  blockedAt: string;
  avatarSrc: string;
};

export const accountMock = {
  profile: {
    displayName: "Sarah Chen",
    handle: "sarahchen", // not editable
    primaryEmail: "sarah.chen@gmail.com",
    backupEmail: "sarah.backup@gmail.com",
    phone: "+1 (555) 123-4567",
    country: "Cambodia",
    timeZone: "Asia Time (UTC+7)",
    language: "English",
  },
  sessions: [
    { title: "Chrome on macOS", meta: "San Francisco, CA • 192.168.1.1", time: "Last seen: 2 minutes ago" },
    { title: "Safari on iPhone", meta: "San Francisco, CA • 192.168.1.50", time: "Last seen: 2 days ago" },
    { title: "Firefox on Windows", meta: "New York, NY • 10.0.73.1", time: "Last seen: 2 days ago" },
  ],
};

export const blockedUsersMock: BlockedUser[] = [
  { id: "u1", name: "Marcus Peterson", blockedAt: "Blocked on Jan 28, 2025", avatarSrc: "/images/emma.png" },
  { id: "u2", name: "Lisa Anderson", blockedAt: "Blocked on Jan 15, 2025", avatarSrc: "/images/yuno.png" },
  { id: "u3", name: "David Martinez", blockedAt: "Blocked on Dec 22, 2024", avatarSrc: "/images/yami.png" },
  { id: "u4", name: "Rachel Kim", blockedAt: "Blocked on Dec 8, 2024", avatarSrc: "/images/emma.png" },
  { id: "u5", name: "James Foster", blockedAt: "Blocked on Nov 30, 2024", avatarSrc: "/images/emma.png" },
];

// ---------- PRIVACY ----------
export const privacyMock = {
  visibilityOptions: ["Public", "Private"],
  directMsgOptions: ["Anyone", "Private"],
};

// ---------- SECURITY ----------
export const securityMock = {
  devices: [
    { title: "MacBook Pro", meta: "Added Jan 15, 2025 • San Francisco, CA", action: "Revoke" },
    { title: "iPhone 15", meta: "Added Dec 20, 2024 • San Francisco, CA", action: "Revoke" },
  ],
  events: [
    { title: "Password changed", meta: "Mar 1, 2025 at 2:30 PM • 192.168.1.1" },
    { title: "Login from new device", meta: "Feb 28, 2025 at 9:15 AM • 10.0.73.1" },
    { title: "2FA enabled", meta: "Jan 15, 2025 at 4:20 PM • 192.168.1.1" },
  ],
};
