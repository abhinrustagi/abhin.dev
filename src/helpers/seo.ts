import { DefaultSeoProps } from 'next-seo'

export const defaultSeoConfig: DefaultSeoProps = {
	titleTemplate: '%s – Abhin Rustagi',
	defaultTitle: 'Abhin Rustagi – Developer',
	description: 'lorem ipsum',
	canonical: '',
	openGraph: {
		url: '',
		type: 'website',
		site_name: 'Abhin Rustagi',
		locale: '',
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
