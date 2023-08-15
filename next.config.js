/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
  },
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
