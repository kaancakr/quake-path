/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/quake-path" : "";

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;
