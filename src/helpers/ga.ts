import { config } from './config'

declare global {
	interface Window {
		gtag: (...args: any) => void
	}
}

interface Event {
	action: string
	params: Record<string, unknown>
}

const pageView = (url: string) => {
	if (!window) return
	window.gtag('config', `${config.GOOGLE_ANALYTICS_ID}`, {
		page_path: url,
	})
}

const event = ({ action, params }: Event) => {
	if (!window) return
	window.gtag('event', action, params)
}

export const ga = {
	pageView,
	event,
}
