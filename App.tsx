import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import Navigation from "@/components/navigation/Navigation"

import AuthProvider from "@/providers/auth/AuthProvider"

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<SafeAreaView>
						<Navigation />
					</SafeAreaView>
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
		</>
	)
}
