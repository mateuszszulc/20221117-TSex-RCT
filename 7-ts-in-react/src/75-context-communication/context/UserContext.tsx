import React, { useState } from 'react'

const UserContext = React.createContext({});

function CurrentUserProvider({children}: any) {
	const [name, setName] = useState('')
	const [isAuth, setAuth] = useState(false)

	const logIn = (name: any) => {
		setName(name)
		setAuth(true)
	}

	const logOut = () => {
		setName('')
		setAuth(false)
	}

	return (
		<UserContext.Provider value={{name, isAuth, logIn, logOut}}>
			{children}
		</UserContext.Provider>
	)
}

export default {
	CurrentUserProvider,
	UserContext
}
