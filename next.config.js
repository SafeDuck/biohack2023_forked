/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    discord: process.env.DISCORD_INVITE,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig