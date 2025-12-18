/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@kinde/infrastructure'],
  // Configure page extensions for Kinde custom UI
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Use webpack instead of Turbopack for compatibility
  experimental: {
    turbo: false,
  },
  // Custom webpack config to handle Kinde structure
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the kindeSrc directory to the module resolution
    config.resolve.modules.push('./kindeSrc');
    return config;
  },
}

module.exports = nextConfig