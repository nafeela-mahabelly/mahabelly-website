import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Fully static site — exports plain HTML/CSS/JS to `out/`
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // The Next.js image optimizer can't run on a static host
    unoptimized: true,
  },
}

export default nextConfig
