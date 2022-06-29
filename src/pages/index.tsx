import { Header } from 'components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div className="mx-auto max-w-2xl sm:px-0 px-6">
			<Header />
			<div className="flex justify-between md:items-center md:flex-row-reverse md:flex-nowrap flex-wrap flex-col">
				<div className="relative h-28 w-28 md:mb-0 mb-12">
					<Image
						src="/headshot.jpg"
						alt=""
						layout="fill"
						className="rounded-full"
					/>
				</div>
				<div className="flex-1 md:mr-12">
					<h1 className="text-5xl font-extrabold">Abhin Rustagi</h1>
					<h2 className="font-normal font-body text-lg text-neutral-300 my-3">
						Product Engineer at{' '}
						<Link href="https://www.openhouse.study" passHref>
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-neutral-500 text-neutral-200 font-medium"
							>
								Openhouse
							</a>
						</Link>
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						labore odit repellendus animi delectus dolorum soluta nemo porro est
						aliquid voluptate.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Home
