import React from 'react'
import AnotherLevelOfMadness from './AnotherLevelOfMadness'

function DeeplyNestedComponentStructure ( {date}: any ) {
	return (
		<div>
			 <AnotherLevelOfMadness date={date}/>
		</div>
	)
}

export default DeeplyNestedComponentStructure
