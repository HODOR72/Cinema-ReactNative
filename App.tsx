import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import Navigation from "@/components/navigation/Navigation"
import Toast from "@/components/ui/Toast"

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
			<Toast />
		</>
	)
}
