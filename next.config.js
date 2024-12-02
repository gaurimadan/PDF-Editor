/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader'
    });
    return config;
  },
  transpilePackages: ['canvas']
};

module.exports = nextConfig;