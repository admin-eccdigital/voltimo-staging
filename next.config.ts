import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/voltimo-staging",
  assetPrefix: "/voltimo-staging",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/voltimo-staging",
  },
};

export default nextConfig;
