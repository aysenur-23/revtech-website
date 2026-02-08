/** @type {import('next').NextConfig} */
const nextConfig = {
        // Static export configuration for Hostinger
        output: 'export', // Production için aktif
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
        
        // Redirects to clean up tr/tr URLs
        async redirects() {
          return [
            { source: '/:l(tr|en)/:dup(tr|en)/:path*', destination: '/:l/:path*', permanent: true },
            // Remove the problematic redirect that causes infinite loop
          ];
        },
  
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
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
        hostname: 'projecttest.com.tr',
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

module.exports = nextConfig;
