import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LeadVision-Website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
