import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/chat/:path*",
        destination: "https://foundit-owxk.onrender.com/chat/:path*",
      },
    ];
  },
};

export default nextConfig;
