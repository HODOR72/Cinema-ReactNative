import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { Auth, Screen404 } from '../components/screens'

import { TypeRootStackParamList } from './navigation.types'
import { routes, userRoutes } from './user.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#090909'
				}
			}}
		>
			{user ? (
				user.isAdmin ? (
					routes.map(route => <Stack.Screen key={route.name} {...route} />)
				) : (
					userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
				)
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigator
