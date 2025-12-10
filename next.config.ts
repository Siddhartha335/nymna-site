/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config: { module: { rules: { test: RegExp; use: string[]; }[]; }; }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  images: {
    domains: ['admin.nymna.com','0.0.0.0','localhost'],
  },
};

module.exports = nextConfig;