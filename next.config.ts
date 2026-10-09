import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* GitHub Pages configuration */
  output: "export",
  basePath: isProd ? "/shorya-portfolio" : "",
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