import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'

export const Header = () => {
	const [expanded, setExpanded] = useState(false)

	const menuItems = [
		{
			text: 'Home',
			path: '/',
		},
		{ text: 'About', path: '/about' },
		{ text: 'Resume', path: '/resume' },
	]

	const toggle = () => setExpanded(!expanded)

	return (
		<header className="flex items-center justify-between md:mt-8 mt-6 md:mb-28 mb-16 flex-wrap md:flex-nowrap relative rounded bg-white/20 backdrop-blur px-5 shadow-lg">
			<div className="absolute w-full h-12 top-0 left-0 bg-gradient-to-r from-rose-600/80 to-blue-600/80 via-violet-600/80 blur-3xl -z-10"></div>
			<Link href="/" passHref>
				<a className="font-bold text-stone-50 text-lg flex items-center justify-center relative w-12 h-12 cursor-pointer -left-3">
					AR
				</a>
			</Link>
			<div className="text-xl text-stone-50 md:hidden">
				{!expanded && <HiOutlineMenuAlt4 onClick={toggle} />}
				{expanded && <HiOutlineX className="animate-pulse" onClick={toggle} />}
			</div>
			<nav
				className={`w-full md:w-auto md:max-h-16 overflow-hidden duration-300 ${
					expanded ? 'max-h-48' : 'max-h-0'
				}`}
			>
				<ul className="flex md:items-center md:flex-row flex-col my-3 md:my-0">
					{menuItems.map(({ text, path }) => (
						<li key={text}>
							<Link href={path} passHref>
								<a
									className={`text-sm text-center w-full inline-block py-2 md:px-3 text-stone-50`}
								>
									{text}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
