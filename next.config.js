/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		//domains: ['agregar dominios'],
	},
};

module.exports = nextConfig;
