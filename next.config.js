/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization for better performance and SEO
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'storage.googleapis.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression for faster loading
  compress: true,

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // Redirects (optional - add if you have old URLs to redirect)
  async redirects() {
    return [
      // Example: Redirect old URLs to new ones
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },

  // Rewrites for clean URLs and SEO
  async rewrites() {
    return [
      // Sitemap rewrite to API route
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ]
  },

  // Enable SWC minification for better performance
  swcMinify: true,

  // Power Page Speed with optimized fonts
  experimental: {
    optimizeFonts: true,
  },

  // Production only optimizations
  productionBrowserSourceMaps: false,

  // Webpack configuration for optimization
  webpack: (config, { isServer }) => {
    // Optimize for production
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    }

    return config
  },
}

module.exports = nextConfig
