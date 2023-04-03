/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "www.google.com", "images.pexels.com"],
  },
};

module.exports = nextConfig;
