export const config = {
	GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS,
	ENV: process.env.ENV,
	HOST: process.env.HOST,
	WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
	WAKATIME_USERNAME: process.env.WAKATIME_USERNAME,
}

export const isProd = config.ENV === 'production'
