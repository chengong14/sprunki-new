import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.twoplayergames.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
