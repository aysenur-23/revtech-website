const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for Hostinger
  output: 'export', // Development için kapalı
  trailingSlash: true,
  reactStrictMode: true,

  // Asset prefix for shared hosting compatibility
  assetPrefix: '', // Production için aktif
  basePath: '', // Production için aktif

  // Encoding configuration for Turkish characters
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },

  // UTF-8 encoding configuration - removed NODE_OPTIONS as it's not allowed in Next.js
  // Note: Redirects are handled by .htaccess in static export mode

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Experimental features for better performance
  experimental: {
    // optimizeCss: true, // Disabled due to critters compatibility issue
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Webpack optimizations - Next.js zaten optimize ediyor, ekstra optimizasyon gerekmiyor
  // usedExports ve cacheUnaffected birlikte kullanılamaz, Next.js'in kendi optimizasyonlarını kullan

  images: {
    // Static export için image optimizasyonu devre dışı
    unoptimized: true,
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      // Production domain
      {
        protocol: 'https',
        hostname: 'reviumtech.com',
        pathname: '/images/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Headers are handled by .htaccess in static export
  // async headers() { ... } - Not available in static export
};

module.exports = withNextIntl(nextConfig);
