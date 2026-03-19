/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    qualities: [75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // output: "export",
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
