import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Under Construction – Abhin Rustagi</title>
			</Head>
			<div className="mx-auto max-w-2xl px-6">
				<span className="text-lg mt-5 block text-amber-400">Abhin Rustagi</span>
				<h1 className="text-5xl my-6">Under Construction</h1>
				<p>
					Hello, I&apos;m currently redesigning my portfolio. Please check in
					again in some time.
				</p>
				<p className="mt-4">
					Meanwhile, please feel free to contact me at{' '}
					<Link href="mailto:hi@abhin.dev">
						<a className="text-stone-50 font-medium underline">hi@abhin.dev</a>
					</Link>
					.
				</p>
			</div>
		</>
	)
}

export default Home
