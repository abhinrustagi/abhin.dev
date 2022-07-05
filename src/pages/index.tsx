import { Container } from 'components'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<Container>
			<div className="flex justify-between md:flex-row-reverse md:flex-nowrap flex-wrap flex-col">
				<div className="relative h-28 w-28 md:mb-0 mb-12">
					<Image
						src="/headshot.jpg"
						alt="Abhin Rustagi Profile"
						layout="fill"
						className="rounded-full"
					/>
				</div>
				<div className="flex-1 md:mr-12">
					<span className="mb-3 block font-medium text-stone-300">
						Hello, I am
					</span>
					<h1 className="text-5xl font-extrabold">Abhin Rustagi</h1>

					<p className="mt-6">
						Product Engineer at{' '}
						<Link href="https://www.openhouse.study" passHref>
							<a>Openhouse</a>
						</Link>{' '}
						– Curious developer, who enjoys creating user-first products that
						help deliver experiences.
					</p>
				</div>
			</div>
		</Container>
	)
}

export default Home
