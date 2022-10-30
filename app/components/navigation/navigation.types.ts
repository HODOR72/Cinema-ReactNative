import { ComponentType } from "react";


export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Screen404: undefined
	Profile: undefined
	Search: undefined
	Trending: undefined
	Favorites: undefined
	Movie: {
		slug: string
	}
	Genre: {
		slug: string
	}
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
	Admin: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
	isAdmin?: boolean
}