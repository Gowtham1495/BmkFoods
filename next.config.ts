import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions:
    process.env.NODE_ENV === "production"
      ? ["tsx"]
      : ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;