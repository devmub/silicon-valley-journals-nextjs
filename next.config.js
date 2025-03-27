/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "siliconvalleyjournals.com", // Your WordPress media domain
        "new.siliconvalleyjournals.com",
        "secure.gravatar.com", // For WordPress avatars if used
      ],
    },
    async rewrites() {
      return {
        beforeFiles: [
          // Rewrite API requests to your WordPress site
          {
            source: "/wp-content/:path*",
            destination: "https://siliconvalleyjournals.com/wp-content/:path*",
          },
        ],
      }
    },
  }
  
  module.exports = nextConfig
  
  