import { Container } from 'components'
import Content from 'content/uses.mdx'
import { SSG } from 'helpers'
import type { NextPage } from 'next'

const Uses: NextPage = () => {
	return (
		<Container>
			<Content />
		</Container>
	)
}

export default Uses

export const getStaticProps = SSG.uses
