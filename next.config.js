/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* config options here */
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@public": path.resolve(__dirname, "public"),
      "@api": path.resolve(__dirname, "src/app/[lang]/api"),
    };
    return config;
  },
};

module.exports = nextConfig;
