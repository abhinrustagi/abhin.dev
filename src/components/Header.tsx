import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
	const router = useRouter()

	const menuItems = [
		{
			text: 'Home',
			path: '/',
		},
		{ text: 'About Me', path: '/about-me' },
		{ text: 'Resume', path: '/resume' },
	]

	return (
		<header className="flex items-center justify-between mt-8 mb-16">
			<Link href="/" passHref>
				<a className="rounded font-bold text-stone-50 text-lg flex items-center justify-center relative w-12 h-12 bg-neutral-800 hover:border-stone-50 hover:border-solid hover:border-2 cursor-pointer">
					AR
				</a>
			</Link>
			<nav>
				<ul className="flex items-center">
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
