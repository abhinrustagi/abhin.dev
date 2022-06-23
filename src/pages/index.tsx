import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div className="mx-auto max-w-2xl px-6">
			<h1 className="text-5xl">Abhin Rustagi</h1>
			<h2 className="font-medium text-lg text-neutral-300 my-3">
				Product Engineer at{' '}
				<Link href="https://www.openhouse.study" passHref>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-neutral-500 text-neutral-200"
					>
						Openhouse
					</a>
				</Link>
			</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum provident
				quasi velit ex non dolore a ab, voluptatum perspiciatis iusto ipsum,
				sequi repudiandae impedit ea nesciunt id aspernatur reprehenderit
				perferendis!
			</p>
		</div>
	)
}

export default Home
