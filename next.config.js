/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["siliconvalleyjournals.com", "new.siliconvalleyjournals.com", "secure.gravatar.com"],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/wp-content/:path*",
          destination: "https://siliconvalleyjournals.com/wp-content/:path*",
        },
      ],
    }
  },
}

module.exports = nextConfig

