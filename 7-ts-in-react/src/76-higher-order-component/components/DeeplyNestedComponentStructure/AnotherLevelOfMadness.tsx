import React from 'react'
import IAlsoNeedADate from './IAlsoNeedADate'

function AnotherLevelOfMadness ({date}: any) {

	return (
		<div>
			<IAlsoNeedADate date={date} />
		</div>
	)
}

export default AnotherLevelOfMadness
