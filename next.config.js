/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'servicios.eafit.edu.co',
				port: '',
				pathname: '/cs/FLDONCS/cache/EA_HEADER_MICRO_ESP_1.png',
			},
			{
				protocol: 'https',
				hostname: '**.example.com',
			},
		],
	},
};

module.exports = nextConfig;
