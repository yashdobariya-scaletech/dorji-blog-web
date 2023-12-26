/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/assets/styles')]
	},

	images: {
		domains: ['dorgi-admin.9span.in'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dorgi-admin.9span.in',
				port: '443',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
