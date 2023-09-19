/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,

  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds:true
  }
}

module.exports = nextConfig
