import Link from 'next/link'
import React from 'react'

const btnClasses =
	'font-medium rounded px-6 py-3 inline-block text-sm bg-neutral-700/60 text-white cursor-pointer hover:bg-neutral-700/90'

// export const Button = () => <button></button>

export const Anchor = ({
	href,
	children,
	className: classes,
	...props
}: React.HTMLProps<HTMLAnchorElement> & {
	children: React.ReactNode
	className?: string
}) => (
	<Link passHref href={href || '/'}>
		<a className={`${btnClasses} ${classes ? classes : ''}`} {...props}>
			{children}
		</a>
	</Link>
)
