/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	env: {
		GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
		HOST: process.env.HOST,
		WAKATIME_USERNAME: process.env.WAKATIME_USERNAME,
		WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
	},
}

module.exports = nextConfig
