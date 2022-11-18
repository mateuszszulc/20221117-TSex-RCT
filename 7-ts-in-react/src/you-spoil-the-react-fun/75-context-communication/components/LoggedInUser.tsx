import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function LoggedInUser() {

	// @ts-ignore
	const {name, isAuth, logOut} = useContext(UserContext);

	return (
		<div className="notification is-info is-light">
			<div className="is-flex is-align-items-center">
				{
					isAuth ?
						<>
							Logged in as: <strong className="pl-2">{name}</strong>
							<button className="button ml-2 is-small" onClick={() => logOut()}>Logout</button>
						</>
						:
						<>
							Not logged in :(
						</>
				}
			</div>
		</div>
	)
}

export default LoggedInUser
