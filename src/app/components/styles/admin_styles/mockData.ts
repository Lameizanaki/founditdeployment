// src/app/components/styles/admin/mockData.ts

export type AdminNavItem = {
  label: string;
  href: string;
  iconKey: "dashboard" | "products" | "users" | "reports" | "settings";
};

export type AdminStatCard = {
  title: string;
  value: string;
  delta: string;
  iconKey: "cube" | "clipboard" | "users" | "userPlus" | "alert" | "money";
  iconBgClass: string;
  iconColorClass: string;
  badgeClass?: string;
};

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/page/admin/dashboard", iconKey: "dashboard" },
  { label: "Products", href: "/page/admin/products", iconKey: "products" },
  { label: "Users", href: "/page/admin/users", iconKey: "users" },
  { label: "Reports", href: "/page/admin/reports", iconKey: "reports" },
  { label: "Settings", href: "/page/admin/setting", iconKey: "settings" }, // no "s"
];

export const dashboardStats: AdminStatCard[] = [
  {
    title: "Total Products",
    value: "1,247",
    delta: "+12%",
    iconKey: "cube",
    iconBgClass: "bg-blue-50",
    iconColorClass: "text-blue-600",
  },
  {
    title: "Total Freelancer",
    value: "856",
    delta: "+8%",
    iconKey: "clipboard",
    iconBgClass: "bg-purple-50",
    iconColorClass: "text-purple-600",
  },
  {
    title: "Total Users",
    value: "12,483",
    delta: "+24%",
    iconKey: "users",
    iconBgClass: "bg-green-50",
    iconColorClass: "text-green-600",
  },
  {
    title: "Total Clients",
    value: "3,847",
    delta: "+16%",
    iconKey: "userPlus",
    iconBgClass: "bg-emerald-50",
    iconColorClass: "text-emerald-600",
  },
  {
    title: "Pending Reviews",
    value: "23",
    delta: "23",
    iconKey: "alert",
    iconBgClass: "bg-orange-50",
    iconColorClass: "text-orange-500",
    badgeClass: "bg-red-600 text-white",
  },
  {
    title: "Total Revenue",
    value: "$285K",
    delta: "+18%",
    iconKey: "money",
    iconBgClass: "bg-emerald-50",
    iconColorClass: "text-emerald-600",
  },
];
