import { Admin } from "../screens"

import { IRoute } from "./navigation.types"

export const adminRoutes: IRoute[] = [
	{
		name: "Admin",
		component: Admin,
		isAdmin: true
	}
]
