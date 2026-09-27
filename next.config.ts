import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  trailingSlash: isGithubPages ? true : false,
  basePath: "/BmkFoods",
  assetPrefix: "/BmkFoods",
  images: {
    unoptimized: true,
  },
  pageExtensions:
    process.env.NODE_ENV === "production"
      ? ["tsx"]
      : ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;