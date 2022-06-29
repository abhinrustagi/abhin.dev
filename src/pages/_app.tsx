import { config, defaultSeoConfig } from 'helpers'
import { DefaultSeo } from 'next-seo'
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

	const handleRouteChange = (url: string) => {
		window.gtag('config', `${config.GOOGLE_ANALYTICS_ID}`, {
			page_path: url,
		})
	}

	useEffect(() => {
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<>
			<DefaultSeo {...defaultSeoConfig} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
