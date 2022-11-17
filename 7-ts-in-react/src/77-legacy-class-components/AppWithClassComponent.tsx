import React from 'react'
import MemorableQuotes from './components/MemorableQuotes'

function AppWithClassComponent () {
	return (
		<div>
			<header className="hero is-link mb-5">
				<div className="hero-body">
					<p className="title">
						<code>7.7</code> Types in class components
					</p>
				</div>
			</header>
			<main className="container">
				   <div className="row">
					   {/* @ts-ignore */}
					   <MemorableQuotes title="Star Wars - quotes, once again..." />
				   </div>
			</main>
		</div>
	)
}

export default AppWithClassComponent
