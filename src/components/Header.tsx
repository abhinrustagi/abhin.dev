import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'

export const Header = () => {
	const router = useRouter()
	const [expanded, setExpanded] = useState(false)

	const menuItems = [
		{
			text: 'Home',
			path: '/',
		},
		{ text: 'About Me', path: '/about-me' },
		{ text: 'Resume', path: '/resume' },
	]

	const toggle = () => setExpanded(!expanded)

	return (
		<header className="flex items-center justify-between mt-8 mb-16 flex-wrap md:flex-nowrap">
			<Link href="/" passHref>
				<a className="rounded font-bold text-stone-50 text-lg flex items-center justify-center relative w-12 h-12 bg-neutral-800 hover:border-stone-50 hover:border-solid hover:border-2 cursor-pointer">
					AR
				</a>
			</Link>
			<HiOutlineMenuAlt4
				onClick={toggle}
				className="text-xl text-stone-50 md:hidden"
			/>
			<nav
				className={`md:relative absolute bg-neutral-900 w-full h-full z-50 ${
					expanded ? 'top-0' : '-top-full'
				} left-0 md:bg-transparent md:w-auto`}
			>
				<HiOutlineX
					onClick={toggle}
					className="absolute top-5 right-5 text-xl text-stone-50 md:hidden"
				/>
				<ul className="flex md:items-center md:mt-0 mt-20 md:flex-row flex-col md:p-0 p-4">
					{menuItems.map(({ text, path }) => (
						<li key={text}>
							<Link href={path} passHref>
								<a
									className={`font-medium hover:bg-neutral-700/50 inline-block py-2 px-3 rounded ${
										router.pathname === path ? 'text-stone-50' : ''
									}`}
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
