import { NavigationProp, useNavigation } from "@react-navigation/native"

import { TypeRootStackParamList } from "@/components/navigation/navigation.types"

export const useTypedNavigation = () =>
	useNavigation<NavigationProp<TypeRootStackParamList>>()
