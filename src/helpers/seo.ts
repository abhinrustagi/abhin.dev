import { DefaultSeoProps } from 'next-seo'
import { config } from 'helpers'

export const defaultSeoConfig: DefaultSeoProps = {
	titleTemplate: '%s – Abhin Rustagi',
	defaultTitle: 'Abhin Rustagi – Developer',
	description: 'lorem ipsum',
	canonical: config.HOST,
	openGraph: {
		url: config.HOST,
		type: 'website',
		site_name: 'Abhin Rustagi',
	},
	twitter: {
		cardType: 'summary',
		handle: '@abhinrustagi',
	},
	additionalMetaTags: [
		{
			name: 'google-site-verification',
			content: 'bgqtiQYbl0yMe_CYQZD3t9hvQvcHh_uUMw74V7xxZh8',
		},
		{
			name: 'twitter:description',
			content: 'lorem ipsum',
		},
	],
	additionalLinkTags: [
		{ rel: 'favicon icon', href: '/favicon.ico', type: 'image/x-icon' },
		{
			rel: 'icon',
			href: '/favicon-16x16.png',
			sizes: '16x16',
			type: 'image/png',
		},
		{
			rel: 'icon',
			href: '/favicon-32x32.png',
			sizes: '32x32',
			type: 'image/png',
		},
		{
			rel: 'apple-touch-icon',
			href: '/apple-touch-icon.png',
			type: 'image/png',
		},
	],
}

export const SSG = {
	about: () => ({ props: { seo: { title: 'About' } } }),
	now: () => ({ props: { seo: { title: 'Now' } } }),
	404: () => ({ props: { seo: { title: '404' } } }),
	500: () => ({ props: { seo: { title: '500' } } }),
}
