import React from 'react'
import PropTypes from 'prop-types'

import LoggedInUser from './LoggedInUser'

TopBar.propTypes = {
	title: PropTypes.string.isRequired,
}

function TopBar ({ title}: any) {

	return (
		<nav className="navbar is-align-items-center content">
			<h4>{title}</h4>
			<div className="navbar-end">
				<LoggedInUser />
			</div>
		</nav>
	)
}

export default TopBar
