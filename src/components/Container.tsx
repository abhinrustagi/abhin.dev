import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface IContainer {
	children?: React.ReactNode
}

export const Container: React.FC<IContainer> = ({ children, ...props }) => (
	<div className="max-w-2xl sm:px-0 px-6 mx-auto" {...props}>
		<Header />
		<main>{children}</main>
		<Footer />
	</div>
)
