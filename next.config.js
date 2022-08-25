/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
    outputStandalone: true,
  },
  images: {
    domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;
