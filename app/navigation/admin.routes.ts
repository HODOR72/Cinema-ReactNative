import {
	ActorEdit,
	ActorList,
	Admin,
	GenreEdit,
	GenreList,
	MovieEdit,
	MovieList,
	UserEdit,
	UserList
} from '../components/screens/admin'

import { IRoute } from './navigation.types'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	},
	{
		name: 'ActorEdit',
		component: ActorEdit,
		isAdmin: true
	},
	{
		name: 'ActorList',
		component: ActorList,
		isAdmin: true
	},
	{
		name: 'GenreEdit',
		component: GenreEdit,
		isAdmin: true
	},
	{
		name: 'GenreList',
		component: GenreList,
		isAdmin: true
	},
	{
		name: 'MovieEdit',
		component: MovieEdit,
		isAdmin: true
	},
	{
		name: 'MovieList',
		component: MovieList,
		isAdmin: true
	},
	{
		name: 'UserEdit',
		component: UserEdit,
		isAdmin: true
	},
	{
		name: 'UserList',
		component: UserList,
		isAdmin: true
	}
]
