export const config = {
	GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS,
	ENV: process.env.NODE_ENV,
}

export const isProd = config.ENV === 'production'
