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
				protocol: 'http',
				hostname: '43.205.193.199',
				port: '1337',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
