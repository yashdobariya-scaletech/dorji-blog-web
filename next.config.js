/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/assets/styles')]
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dorgi-api.9span.in',
				port: '1337',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
