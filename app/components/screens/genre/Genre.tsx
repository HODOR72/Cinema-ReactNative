import React, { FC } from 'react'

import { Layout, Loader, NotFound } from '@/components/ui'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'
import { useGenre } from './useGenre'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					movies={movies}
					title={genre.name}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre
