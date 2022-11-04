import { FC } from 'react'
import { Text, View } from 'react-native'

import { Layout, Loader } from '@/components/ui'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import { useTrending } from './useTrending'

const Trending: FC = () => {
	const { isLoading, movies } = useTrending()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog
				title='Trending'
				movies={movies}
				description='Trending movies in excellent quality: legal, safe, without ads'
			/>
		</Layout>
	)
}

export default Trending
