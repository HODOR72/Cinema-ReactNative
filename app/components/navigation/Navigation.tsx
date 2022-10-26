import { NavigationContainer } from "@react-navigation/native"
import React from "react"

import PrivateNavigator from "./PrivateNavigator"

function Navigation() {
	return (
		<NavigationContainer>
			<PrivateNavigator />
		</NavigationContainer>
	)
}

export default Navigation
