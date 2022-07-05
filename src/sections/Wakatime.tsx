import { isProd, parseWakatimeData } from 'helpers'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiLoader } from 'react-icons/fi'

export const Wakatime = () => {
	const [data, setData] = useState<{
		ok: boolean
		data?: any
		message?: string
	}>({ ok: false })

	useEffect(() => {
		const req = async () => {
			const wakatimeStats = await fetch('/api/wakatime').then(res => res.json())
			const parsedData = parseWakatimeData(wakatimeStats)

			setData({ ...parsedData })
		}

		if (isProd) req()

		return () => setData({ ok: false })
	}, [])

	const renderWakatimeLanguageStats = data?.ok ? (
		<ul className="flex flex-wrap">
			{data?.data.map((language: any) => (
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
			{data.message ? (
				'There was an error fetching required data. 😕 ' + data.message
			) : (
				<span className="flex items-center">
					<FiLoader className="text-xl mr-3 motion-safe:animate-spin" />{' '}
					Fetching data
				</span>
			)}
		</p>
	)

	return (
		<section className="rounded-lg relative bg-white/5 p-8 backdrop-blur-lg shadow-lg border border-solid border-zinc-800 my-12">
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
