import Link from 'next/link'

export const Footer = () => {
	return (
		<footer className="mt-8 border-t border-t-solid border-t-neutral-700 pt-12">
			<h2 className="text-3xl">Let&apos;s Connect</h2>
			<p className="my-5">
				Usually up to meet new people, and for newer experiences, do feel free
				to ping me at email at{' '}
				<Link href="mailto:hi@abhin.dev">
					<a className="text-stone-200">hi@abhin.dev</a>
				</Link>
				.
			</p>
		</footer>
	)
}
