import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Set basePath for GitHub Pages deployment (repository name is 'portfolio')
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

