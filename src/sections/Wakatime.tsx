import { parseWakatimeData } from 'helpers'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Wakatime = () => {
	const [data, setData] = useState<{
		ok: boolean
		data?: any
		message?: string
	}>()

	useEffect(() => {
		const req = async () => {
			const wakatimeStats = await fetch('/api/wakatime').then(res => res.json())
			const parsedData = parseWakatimeData(wakatimeStats)

			setData(parsedData)
		}

		req()
	}, [])

	const renderWakatimeLanguageStats = data?.ok ? (
		<ul className="flex flex-wrap">
			{data?.data.map((language: any, index: number) => (
				<li key={language.name} className="flex items-center text-sm mb-2 mr-6">
					<span className="relative inline-block mr-2 w-2 h-2 rounded-full bg-sky-500"></span>
					<span className="text-stone-300 font-medium">{language.name}</span>
					&nbsp;&nbsp;
					<span className="text-neutral-400">{language.percent}%</span>
				</li>
			))}
		</ul>
	) : (
		<p className="text-stone-50 font-bold">
			There was an error fetching data. 😕
		</p>
	)

	return (
		<section className="rounded-lg relative bg-white/10 p-8 backdrop-blur-lg shadow-md my-12">
			<h2 className="text-xl">Recent Activity</h2>
			<p className="mt-2 mb-4 text-sm">Recorded data for the last 7 days</p>
			{renderWakatimeLanguageStats}
			<p className="text-stone-400 mt-2 text-sm text-right">
				Source:{' '}
				<Link href="https://www.wakatime.com">
					<a target="_blank" rel="noreferrer noopener" className="underline">
						Wakatime
					</a>
				</Link>
			</p>
		</section>
	)
}
