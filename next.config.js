// @ts-check

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = process.env.NODE_ENV === 'development' ? withBundleAnalyzer(nextConfig) : nextConfig;
module.exports = withBundleAnalyzer(nextConfig)