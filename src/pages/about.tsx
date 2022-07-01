import { Container, Header } from 'components'
import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
	return (
		<Container>
			<h1 className="text-4xl mb-8">Hi again, nice to meet you!</h1>
			<p className="leading-7 my-4 text-stone-300">
				I&apos;m Abhin Rustagi, a frontend developer, based out of New Delhi,
				India. I foster a personal and growing interest for user-first products,
				that improve experiences.
			</p>
			<p className="leading-7 my-4 text-stone-300">
				I operate at the intersection of optimality, efficiency and growth. This
				means leveraging all variables to put forth the best possible results,
				while experimenting with new and varied ideas.
			</p>
			<p className="leading-7 my-4 text-stone-300">
				Recently (2022), I graduated from University of Delhi, with a degree in
				Bachelor of Science (Honors.) Statistics. It was twisty, turvy move from
				Statistics to Programming, but an exciting one at that.
			</p>
			<p className="leading-7 my-4 text-stone-300">
				If you want to get in touch, I&apos;m most responsive over{' '}
				<Link href="mailto:hi@abhin.dev" passHref>
					<a className="hover:underline text-sky-400">email</a>
				</Link>
				, or on{' '}
				<Link passHref href="https://www.linkedin.com/in/abhinrustagi">
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="hover:underline text-sky-400"
					>
						LinkedIn
					</a>
				</Link>
				.
			</p>
			<p className="leading-7 my-4 text-stone-300">
				Whenever I&apos;m not working on a project, you might find me
				researching / doing / obsessing over Trekking, Cricket (sport), or,
				Coffee.
			</p>
		</Container>
	)
}

export default About

export const getStaticProps = (ctx: any) => {
	console.log(ctx)

	return {
		props: {
			seo: {
				title: 'About Me',
				canonical: 'https://www.abhin.dev/about',
				openGraph: { url: 'https://www.abhin.dev/about' },
			},
		},
	}
}
