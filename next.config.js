/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: { GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS },
}

module.exports = nextConfig
