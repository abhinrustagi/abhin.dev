import { Container, MDXParser } from 'components'
import { SSG } from 'helpers'
import type { NextPage } from 'next'
import NowContent from 'content/now.mdx'
import { Wakatime } from 'sections'

const Now: NextPage = () => {
	return (
		<Container>
			<MDXParser content={<NowContent />} />
			<Wakatime />
		</Container>
	)
}

export default Now

export const getStaticProps = SSG.now
