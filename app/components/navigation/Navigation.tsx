import {
	NavigationContainer,
	useNavigationContainerRef
} from "@react-navigation/native"
import React, { FC, useEffect, useState } from "react"

import { useAuth } from "@/hooks/useAuth"

import { useCheckAuth } from "@/providers/auth/useCheckAuth"

import BottomMenu from "../ui/layout/bottom-menu/BottomMenu"

import PrivateNavigator from "./PrivateNavigator"

const Navigation: FC = () => {
	const { user } = useAuth()

	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener("state", () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)

		return () => {
			navRef.removeListener("state", listener)
		}
	}, [])

	useCheckAuth(currentRoute)

	return (
		<>
			<NavigationContainer ref={navRef}>
				<PrivateNavigator />
			</NavigationContainer>
			{user && currentRoute && (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			)}
		</>
	)
}

export default Navigation
