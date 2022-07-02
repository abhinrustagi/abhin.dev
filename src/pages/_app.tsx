import { config, defaultSeoConfig, isProd } from 'helpers'
import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

declare global {
	interface Window {
		gtag: (...args: any) => void
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	const pathname = config.HOST + router.asPath

	const handleRouteChange = (url: string) => {
		if (typeof window !== 'undefined') {
			window.gtag('config', `${config.GOOGLE_ANALYTICS_ID}`, {
				page_path: url,
			})
		}
	}

	useEffect(() => {
		if (!isProd) return

		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<>
			<DefaultSeo {...defaultSeoConfig} />
			<NextSeo
				// Hide Staging Deploys
				nofollow={isProd ? false : true}
				noindex={isProd ? false : true}
				canonical={pathname}
				openGraph={{ url: pathname }}
				{...pageProps.seo}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
