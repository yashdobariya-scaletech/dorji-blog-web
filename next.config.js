/** @type {import('next').NextConfig} */
const path = require("path");
console.log("path:", path.join(__dirname, "src/assets/styles"));

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/styles")],
  },
};

module.exports = nextConfig;
