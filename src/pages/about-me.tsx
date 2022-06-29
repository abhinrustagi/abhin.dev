import { Header } from 'components'
import type { NextPage } from 'next'

const About: NextPage = () => {
	return (
		<div className="mx-auto max-w-2xl sm:px-0 px-6">
			<Header />
			<h1 className="text-3xl">Hi there, nice to meet you!</h1>
		</div>
	)
}

export default About
