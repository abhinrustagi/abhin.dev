import React from 'react'

interface IContainer {
	children?: React.ReactNode
}

export const Container: React.FC<IContainer> = ({ children, ...props }) => (
	<div className="max-w-2xl sm:px-0 px-6" {...props}>
		{children}
	</div>
)
