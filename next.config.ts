/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/quake-path" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
