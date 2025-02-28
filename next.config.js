/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sabineportfolio',
  assetPrefix: '/sabineportfolio/',
}

module.exports = nextConfig