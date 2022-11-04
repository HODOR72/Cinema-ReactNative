import {
	Actor,
	Favorites,
	Genre,
	Home,
	Movie,
	Profile,
	Search,
	Trending
} from '../screens'

import { adminRoutes } from './admin.routes'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Trending',
		component: Trending
	},

	{
		name: 'Genre',
		component: Genre
	},
	{
		name: 'Movie',
		component: Movie
	},

	{
		name: 'Actor',
		component: Actor
	},
	{
		name: 'Search',
		component: Search
	}
]

export const routes = [...userRoutes, ...adminRoutes]
