import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'
import { useScrollTo } from 'hooks'
import { useRouter } from 'next/router'

export const Header = () => {
	const [expanded, setExpanded] = useState(false)
	const onClickScrollTo = useScrollTo('footer')
	const router = useRouter()

	const menuItems = [
		{
			text: 'Home',
			path: '/',
		},
		{ text: 'About', path: '/about' },
		{ text: 'Now', path: '/now' },
		{
			text: 'Resume',
			path: 'https://drive.google.com/file/d/1LdTr0wCjW77fOeAPjlLkrEbBQvKarzzi/view?usp=sharing',
		},
	]

	const toggle = () => setExpanded(!expanded)

	return (
		<header className="flex items-center justify-between md:mt-8 mt-6 md:mb-28 mb-16 flex-wrap md:flex-nowrap relative rounded bg-white/20 backdrop-blur px-5 shadow-lg z-1">
			<div className="absolute w-full h-12 top-0 left-0 bg-gradient-to-r from-rose-600/80 to-blue-600/80 via-violet-600/80 blur-3xl z-0"></div>
			<Link href="/" passHref>
				<a className="font-medium text-stone-50 z-10 text-lg flex items-center justify-center relative w-12 h-12 cursor-pointer -left-3">
					AR
				</a>
			</Link>
			<div className="text-xl z-10 text-stone-50 md:hidden">
				{!expanded && <HiOutlineMenuAlt4 onClick={toggle} />}
				{expanded && <HiOutlineX className="animate-pulse" onClick={toggle} />}
			</div>
			<nav
				className={`w-full md:w-auto z-10 md:max-h-16 overflow-hidden duration-300 ${
					expanded ? 'max-h-48 mb-3 md:mb-0' : 'max-h-0'
				}`}
			>
				<ul className="flex md:items-center md:flex-row flex-col my-3 md:my-0">
					{menuItems.map(({ text, path }) => (
						<li key={text}>
							<Link href={path} passHref>
								<a
									className={`text-sm text-center w-full inline-block py-2 md:px-3 text-stone-50 ${
										router.pathname === path ? 'underline' : ''
									}`}
								>
									{text}
								</a>
							</Link>
						</li>
					))}
					<li
						onClick={() => {
							toggle()
							onClickScrollTo()
						}}
						className="text-sm text-center inline-block py-2 md:px-3 text-stone-50 cursor-pointer hover:underline"
					>
						Contact
					</li>
				</ul>
			</nav>
		</header>
	)
}
