import type { NextConfig } from "next";

// This specifically checks if GitHub's servers are building the code
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  /* GitHub Pages configuration */
  output: "export",
  basePath: isGithubActions ? "/shorya-portfolio" : "",
  assetPrefix: isGithubActions ? "/shorya-portfolio" : "",
  images: {
    unoptimized: true,
  },
  
  /* Your existing config options */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;