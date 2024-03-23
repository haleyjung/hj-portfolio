// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
// module.exports = withBundleAnalyzer(nextConfig)