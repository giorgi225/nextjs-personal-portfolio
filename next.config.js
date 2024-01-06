/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");
const nextConfig = {};

module.exports = withNextIntl({
  images: {
    domains: ["i.ibb.co"],
  },
  nextConfig,
});
