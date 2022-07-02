export const parseWakatimeData = (data: any) => {
	if (data.error) {
		return { ok: false, message: data.error }
	}

	const topFive = data.data.languages
		.slice(0, 5)
		.map(({ name, percent, text }: any) => ({
			name,
			percent,
			text,
		}))

	return { ok: true, data: topFive }
}
