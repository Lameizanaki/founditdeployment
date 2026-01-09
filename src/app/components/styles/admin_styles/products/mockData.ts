// src/app/components/styles/admin/mockData.ts
export type AdminNavItem = {
  label: string;
  href: string; // must be /page/admin/...
  iconKey: "dashboard" | "products" | "users" | "reports" | "settings";
};

export type ProductRow = {
  id: string;
  name: string;
  category: string;
  seller: string;
  sales: number;
  created: string; // YYYY-MM-DD
  rating: number;
  status: "active" | "draft";
  pricePersonal: number;
  priceCommercial: number;
  priceExtended: number;
  description: string;
  thumbTone: "dark" | "gray" | "purple" | "blue";
};

export const adminNavItems: AdminNavItem[] = [
  { label: "Dashboard", href: "/page/admin/dashboard", iconKey: "dashboard" },
  { label: "Products", href: "/page/admin/products", iconKey: "products" },
  { label: "Users", href: "/page/admin/users", iconKey: "users" },
  { label: "Reports", href: "/page/admin/reports", iconKey: "reports" },
  { label: "Settings", href: "/page/admin/setting", iconKey: "settings" }, // (no "s")
];

export const mockProducts: ProductRow[] = [
  {
    id: "p1",
    name: "Modern Dashboard UI Kit",
    category: "UI Kits",
    seller: "Sarah Chen",
    sales: 234,
    created: "2024-01-15",
    rating: 4.8,
    status: "active",
    pricePersonal: 49,
    priceCommercial: 79,
    priceExtended: 149,
    description:
      "This is a comprehensive UI kits designed for modern web applications. Features include responsive design, dark mode support, and extensive documentation.",
    thumbTone: "dark",
  },
  {
    id: "p2",
    name: "E-commerce React Template",
    category: "Web Templates",
    seller: "Mike Johnson",
    sales: 456,
    created: "2024-01-10",
    rating: 4.9,
    status: "active",
    pricePersonal: 89,
    priceCommercial: 129,
    priceExtended: 249,
    description:
      "A complete e-commerce template with product pages, cart, checkout, and admin-ready layout sections.",
    thumbTone: "gray",
  },
  {
    id: "p3",
    name: "AI Prompt Collection",
    category: "AI Prompts",
    seller: "Emma Davis",
    sales: 89,
    created: "2024-01-05",
    rating: 4.5,
    status: "active",
    pricePersonal: 19,
    priceCommercial: 29,
    priceExtended: 59,
    description:
      "Curated prompt packs for productivity, writing, and ideation. Includes templates and best practices.",
    thumbTone: "purple",
  },
  {
    id: "p4",
    name: "Icon Pack - 500+ Icons",
    category: "Illustrations",
    seller: "John Smith",
    sales: 678,
    created: "2024-01-01",
    rating: 4.7,
    status: "active",
    pricePersonal: 29,
    priceCommercial: 49,
    priceExtended: 99,
    description:
      "A big icon set for modern UI. Multiple sizes, clean strokes, ready for web.",
    thumbTone: "blue",
  },
];

export const salesTrend7Days = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 37 },
  { day: "Wed", value: 29 },
  { day: "Thu", value: 13 },
  { day: "Fri", value: 57 },
  { day: "Sat", value: 10 },
  { day: "Sun", value: 13 },
];

export const recentPurchases = [
  { name: "Alice Johnson", when: "1 day ago", amount: 79, initial: "A" },
  { name: "Bob Williams", when: "2 days ago", amount: 79, initial: "B" },
  { name: "Charlie Brown", when: "3 days ago", amount: 79, initial: "C" },
  { name: "Diana Smith", when: "4 days ago", amount: 79, initial: "D" },
];
