import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/shorya-portfolio" : "",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;