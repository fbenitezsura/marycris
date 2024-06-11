const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
    missingSuspenseWithCSRBailout: false,
    serverActions: {
      allowedOrigins: ['sandbox.flow.cl','*.sandbox.flow.cl','*.flow.cl','flow.cl','*.ehfconcept-front.vercel.app','ehfconcept-front.vercel.app','webpay3gint.transbank.cl','webpay3g.transbank.cl'],
    },
  },
  features: store.features,
  reactStrictMode: true,
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "ehfconcept-front.vercel.app",
      },
      {
        protocol: "https",
        hostname: "ecq-medusa-backend-production.up.railway.app"
      },
      {
        protocol: "https",
        hostname: "medusa-ecommerce-bucket.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
