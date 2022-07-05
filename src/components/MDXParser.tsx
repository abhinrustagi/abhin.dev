import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link'

const components = {
	h1: (props: any) => <h1 className="text-4xl font-bold mb-6" {...props} />,
	h2: (props: any) => <h2 className="text-2xl font-bold my-8" {...props} />,
	h3: (props: any) => <h3 className="text-lg font-bold my-4" {...props} />,
	ul: (props: any) => <ul className="pl-6 list-disc" {...props} />,
	li: (props: any) => (
		<li className="leading-7 text-neutral-200 mb-6" {...props} />
	),
	p: (props: any) => <p className="my-3 text-neutral-200" {...props} />,
	a: (props: any) => {
		if (props?.href.startsWith('http')) {
			return (
				<Link href={props.href} passHref>
					<a
						target="_blank"
						rel="noreferrer noopener"
						className="text-sky-400 hover:underline"
						{...props}
					/>
				</Link>
			)
		}

		return <a className="text-sky-400 hover:underline" {...props} />
	},
}

export const MDXParser = ({ children }: { children: React.ReactNode }) => (
	<MDXProvider components={components}>{children}</MDXProvider>
)
