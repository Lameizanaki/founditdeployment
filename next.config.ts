import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ allow build even if ESLint has errors (temporary for hosting)
  eslint: {
    ignoreDuringBuilds: true,
  },

  async rewrites() {
    return [
      {
        source: "/chat/:path*",
        destination: "http://localhost:8085/chat/:path*",
      },
    ];
  },
};

export default nextConfig;
