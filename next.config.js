/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");
const nextConfig = {
  images: {
    domains: ["upcdn.io"],
  },
};

module.exports = withNextIntl(nextConfig);
