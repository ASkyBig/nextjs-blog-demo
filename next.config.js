/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  // swcMinify: true,
  /* config options here */
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@api": path.resolve(__dirname, "src/app/api"),
      "@components": path.resolve(__dirname, "src/app/[lang]/components"),
      "@i18n": path.resolve(__dirname, "src/app/i18n"),
      "@assets": path.resolve(__dirname, "src/assets"),
    };
    return config;
  },
};

module.exports = nextConfig;
