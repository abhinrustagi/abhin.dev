import { Anchor, Container, MDXParser } from 'components'
import { SSG } from 'helpers'
import type { NextPage } from 'next'
import NowContent from 'content/now.mdx'

const Error: NextPage = () => {
	return (
		<Container>
			<h1 className="text-4xl font-bold mb-7">500 - Error on Server-side.</h1>
			<Anchor className="mt-5">Return to home</Anchor>
		</Container>
	)
}

export default Error

export const getStaticProps = SSG[500]
