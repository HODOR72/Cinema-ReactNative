import { useTypedNavigation } from "@/components/hooks/useTypedNavigation"
import { FC } from "react"
import { Pressable, Text, View } from "react-native"

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View>
			<Text className="text-red-500">Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
				<Text className="text-white">
					Go to login
				</Text>
			</Pressable>
		</View>
	)
}

export default Home
