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
      "@api": path.resolve(__dirname, "src/app/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
    };
    return config;
  },
};

module.exports = nextConfig;
