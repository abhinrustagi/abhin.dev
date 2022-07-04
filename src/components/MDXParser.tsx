import React from 'react'
import { MDXProvider } from '@mdx-js/react'

type IHeading = React.HTMLProps<HTMLHeadingElement>
type IList = React.HTMLProps<HTMLUListElement>

const components = {
	h1: (props: IHeading) => (
		<h1 className="text-4xl font-bold mb-6" {...props} />
	),
	h2: (props: IHeading) => (
		<h2 className="text-2xl font-bold my-8" {...props} />
	),
	h3: (props: IHeading) => <h3 className="text-lg font-bold my-4" {...props} />,
	ul: (props: IList) => <ul className="pl-5 list-disc" {...props} />,
	p: (props: React.HTMLProps<HTMLParagraphElement>) => (
		<p className="my-3" {...props} />
	),
	a: (props: any) => <a className="text-sky-400 underline" {...props} />,
}

export const MDXParser = ({ content }: { content: React.ReactNode }) => (
	<MDXProvider components={components}>{content}</MDXProvider>
)
