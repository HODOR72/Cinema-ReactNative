import { FC } from 'react'
import { View } from 'react-native'

import CountUsers from './CountUser'
import PopularMovies from './PopularMovies'

const Statistics: FC = () => {
	return (
		<View className='flex items-stretch'>
			<CountUsers />
			<PopularMovies />
		</View>
	)
}

export default Statistics
