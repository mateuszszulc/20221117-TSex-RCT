import React from 'react'
import PropTypes from 'prop-types'

import LoggedInUser from './LoggedInUser'

TopBar.propTypes = {
	title: PropTypes.string.isRequired,
	isAuth: PropTypes.bool.isRequired,
	userName: PropTypes.string.isRequired,
}

function TopBar ({userName, isAuth, title}: any) {
	return (
		<nav className="navbar is-align-items-center content">
			<h4>{title}</h4>
			<div className="navbar-end">
				<LoggedInUser isAuth={isAuth} name={userName} />
			</div>
		</nav>
	)
}

export default TopBar
