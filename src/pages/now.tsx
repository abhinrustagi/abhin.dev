import { Container, MDXParser } from 'components'
import { SSG } from 'helpers'
import type { NextPage } from 'next'
import Content from 'content/now.mdx'
import { Wakatime } from 'sections'

const Now: NextPage = () => {
	return (
		<Container>
			<Content />
			<Wakatime />
		</Container>
	)
}

export default Now

export const getStaticProps = SSG.now
