import { config, defaultSeoConfig, ga, isProd } from 'helpers'
import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'

export function reportWebVitals({
	name,
	label,
	value,
	id,
}: NextWebVitalsMetric) {
	if (!isProd) {
		console.log({ name, label, value, id })
		return
	}

	ga.event({
		action: name,
		params: {
			event_category: label,
			value: Math.round(name === 'CLS' ? value * 1000 : value),
			event_label: id,
			non_interaction: true,
		},
	})
}

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	const pathname = config.HOST + router.asPath

	const handleRouteChange = (url: string) => {
		if (typeof window !== 'undefined') {
			ga.pageView(url)
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
				canonical={pathname}
				openGraph={{ url: pathname }}
				// Hide Staging Deploys
				nofollow={isProd ? false : true}
				noindex={isProd ? false : true}
				{...pageProps.seo}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
