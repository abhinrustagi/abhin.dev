import Link from 'next/link'

export const Footer = () => {
	const socials = [
		{ media: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinrustagi' },
		{ href: 'https://www.github.com/abhinrustagi', media: 'Github' },
		{ href: 'https://t.me/abhinrustagi', media: 'Telegram' },
		{ href: 'https://www.medium.com/@abhinrustagi', media: 'Medium' },
		{ href: 'https://www.twitter.com/abhinrustagi', media: 'Twitter' },
		{ href: 'https://www.polwork.com/abhinr', media: 'Polywork' },
	]

	const navigate = [
		{ title: 'Now', href: '/now' },
		{ title: 'Blog', href: '/blog' },
		{ title: 'Books', href: '/books' },
		{ title: 'Books', href: '/books' },
	]

	return (
		<footer
			id="footer"
			className="mt-12 border-t border-t-solid border-t-neutral-700 pt-12"
		>
			<h2 className="text-3xl">Let&apos;s Connect</h2>
			<p className="my-5">
				Usually up to meet new people, and for newer experiences, do feel free
				to ping me at email at{' '}
				<Link href="mailto:hi@abhin.dev">
					<a>hi@abhin.dev</a>
				</Link>
				.
			</p>
			<ul></ul>
			<ul className="flex flex-wrap mt-8 mb-16">
				{socials.map(social => (
					<li key={social.media} className="mr-5 mb-3 hover:text-stone-50">
						<Link href={social.href} passHref>
							<a
								className="text-stone-300"
								target="_blank"
								rel="noopener noreferrer"
							>
								{social.media}
							</a>
						</Link>
					</li>
				))}
			</ul>
			<p className="text-sm mb-28">&copy; Abhin Rustagi | 2022</p>
		</footer>
	)
}
