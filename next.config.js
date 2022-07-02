/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
		HOST: process.env.HOST,
	},
}

module.exports = nextConfig
