import { useRouter } from 'next/router'

export const useScrollTo = (sectionId: string) => {
	const router = useRouter()
	const currentPath = router.asPath.split('#')[0]

	return () => router.push({ pathname: currentPath, hash: sectionId })
}
