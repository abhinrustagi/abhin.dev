/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.HOST,
	generateRobotsTxt: true, // (optional)
	// ...other options
}

module.exports = config
