import { FC } from 'react'

import { Layout, Loader, NotFound } from '@/components/ui'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import { useActor } from './useActor'

const Actor: FC = () => {
	const { isLoading, movies, actor } = useActor()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{actor ? (
				<MovieCatalog movies={movies} title={actor.name} isBackButton />
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Actor
