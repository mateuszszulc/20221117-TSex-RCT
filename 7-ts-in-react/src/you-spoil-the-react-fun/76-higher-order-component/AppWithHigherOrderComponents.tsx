import React from 'react'
import ShowEUDate from './components/ShowEUDate'
import ShowUSADate from './components/ShowUSADate'
import DeeplyNestedComponentStructure from './components/DeeplyNestedComponentStructure/DeeplyNestedComponentStructure'

export function AppWithHigherOrderComponents () {

	const todayIs = new Date();

	return (
		<div>
			<header className="hero is-primary mb-5">
				<div className="hero-body">
					<p className="title">
						<code>7.6</code> Higher Order Component
					</p>
				</div>
			</header>
			<main className="container">
				<ShowUSADate date={todayIs} />
				<ShowEUDate date={todayIs} />
				<DeeplyNestedComponentStructure />
			</main>
		</div>
	)
}
