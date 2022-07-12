/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com', 'localhost'],
	},
	env: {
		GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
		WAKATIME_USERNAME: process.env.WAKATIME_USERNAME,
		WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
		HOST: process.env.HOST,
	},
}

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: '@mdx-js/react',
	},
})

module.exports = nextConfig
module.exports = withMDX({
	// Append the default value with md extensions
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
