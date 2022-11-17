import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

function formatUSDate(inputDate: any) {
	if(inputDate instanceof Date) {
		 return format(inputDate, 'MM/dd/yyyy');
	}
	return '[no-date]';
}

ShowUSADate.propTypes = {
	date: PropTypes.object.isRequired
}

function ShowUSADate ({date}: {date: any}) {
	return (
		<div className="bg-dark text-light rounded p-2 my-3">
			Today in US: <strong className="bg-white text-dark p-1">{formatUSDate(date)}</strong>
		</div>
	)
}

export default ShowUSADate
