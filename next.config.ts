import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/work", destination: "/" },
      { source: "/resume", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

export default nextConfig;
