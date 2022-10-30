import { IMovie } from '@/shared/types/movie.interface'
import { FC } from 'react'
import { Text, View, Image } from 'react-native'

const Carousel: FC<{movies: IMovie[]}> = ({movies}) => {
	
	return (
		<View>
			{movies && movies.map(movie => (
				<Text className='text-white'>{movie.title}</Text>
			))}
		</View>
	)
}

export default Carousel
