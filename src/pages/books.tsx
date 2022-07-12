import { Container } from 'components'
import Content from 'content/books.mdx'
import { SSG } from 'helpers'
import type { NextPage } from 'next'

const Books: NextPage = () => {
	return (
		<Container>
			<Content />
		</Container>
	)
}

export default Books

export const getStaticProps = SSG.books
