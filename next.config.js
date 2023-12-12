/** @type {import('next').NextConfig} */
const path = require("path");
console.log("path:", path.join(__dirname, "src/assets/styles"));

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.97",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
