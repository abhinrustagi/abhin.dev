import { config } from 'helpers'
import type { NextApiRequest, NextApiResponse } from 'next'

const WAKATIME_BASE_URL = 'https://wakatime.com/api/v1/users'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (!config.WAKATIME_API_KEY && !config.WAKATIME_USERNAME)
		res.status(400).send('Invalid Wakatime Credentials!')

	const base64AuthString = Buffer.from(config.WAKATIME_API_KEY || '').toString(
		'base64'
	)

	const response = await fetch(
		`${WAKATIME_BASE_URL}/${config.WAKATIME_USERNAME}/stats/last_7_days`,
		{
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				Authorization: `Basic ${base64AuthString}`,
				'Content-Type': 'application/json',
			},
		}
	).then(res => res.json())

	res.send(response)
}
