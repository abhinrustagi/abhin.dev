export const parseWakatimeData = (data: any) => {
	if (data.error) {
		return { ok: false, message: data.error }
	}

	console.log(data.data.languages)

	const rawTopFive = data.data.languages.slice(0, 5)

	// Only display hours if it was busy week 😆
	const shouldUseHrs = rawTopFive[0].hours >= 5 ? true : false

	const processed = rawTopFive.map(({ name, percent, text }: any) => ({
		name,
		text: shouldUseHrs ? text : percent + '%',
	}))

	return { ok: true, data: processed }
}
