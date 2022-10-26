import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import Navigation from "@/components/navigation/Navigation"

import AuthProvider from "@/providers/auth/AuthProvider"

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
		</>
	)
}
