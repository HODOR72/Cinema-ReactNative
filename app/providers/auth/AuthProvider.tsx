import * as SplashScreen from "expo-splash-screen"
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from "react"

import { IContext, TypeUserState } from "./auth-provider.interface"

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {
		let isMounted = true

		const checkAccessToken = async () => {
			try {
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		checkAccessToken()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
