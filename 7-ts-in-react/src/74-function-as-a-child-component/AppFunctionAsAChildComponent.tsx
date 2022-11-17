import { MemorableQuotes } from './components/MemorableQuotes'
import { OnlyYodaQuotes } from './components/OnlyYodaQuotes'

export function AppFunctionAsAChildComponent() {
	return (
		<>
			<header className="hero is-primary mb-5">
				<div className="hero-body">
					<p className="title">
						<code>7.4</code> Function as a Child component
					</p>
				</div>
			</header>
			<main className="container">
				   <div className="columns">
					   <div className="column">
						   <MemorableQuotes />
					   </div>
					   <div className="column">
						   <OnlyYodaQuotes />
					   </div>
				   </div>
			</main>
		</>
	)
}
