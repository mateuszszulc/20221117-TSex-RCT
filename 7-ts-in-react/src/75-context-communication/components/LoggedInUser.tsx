import React from 'react'
import PropTypes from 'prop-types'

LoggedInUser.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
}

function LoggedInUser ({name, isAuth}: any) {
	return (
		<div className="notification is-info is-light">
			<div className="is-flex is-align-items-center">
				{
					isAuth ?
						<>
							Logged in as: <strong className="pl-2">{name}</strong>
							<button className="button ml-2 is-small">Logout</button>
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
