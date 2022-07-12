export const config = {
	GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS,
	ENV: process.env.NODE_ENV,
	HOST: process.env.HOST || 'https://www.abhin.dev',
	WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
	WAKATIME_USERNAME: process.env.WAKATIME_USERNAME,
}

export const isProd = config.ENV === 'production'
