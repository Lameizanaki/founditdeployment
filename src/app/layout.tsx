import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Andada_Pro } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import { RouteGuard } from "./components/auth/RouteGuard";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const andada = Andada_Pro({ subsets: ["latin"], variable: "--font-andada" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "www.founded.com",
  description:
    "'Founded' platform unites clients, freelancers, and sellers in one workspace. Post jobs, get proposals, and track milestones. Freelancers showcase portfolios, win contracts, and get paid via secure escrow. Sellers list digital goods and services with instant delivery. Built-in chat, ratings, and disputes keep work safe and simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.variable} ${andada.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <RouteGuard>{children}</RouteGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
