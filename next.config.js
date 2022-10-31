/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        pathname: "/apod/**",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
        pathname: "/embed/**",
      },
    ],
  },
};

module.exports = nextConfig;
