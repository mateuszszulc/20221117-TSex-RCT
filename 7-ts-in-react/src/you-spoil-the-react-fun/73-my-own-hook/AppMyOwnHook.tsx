import QuotesPanel from './components/QuotesPanel'

export function AppMyOwnHook() {
	return (
		<>
			<header className="hero is-primary mb-5">
				<div className="hero-body">
					<p className="title">
						<code>7.3</code> My Own Hook.
					</p>
				</div>
			</header>
			<main className="container">
				<div className="columns">
					<div className="column">
						<QuotesPanel />
					</div>
					<div className="column">
						<QuotesPanel filterBy="Yoda" title="Yoda quotes"  />
					</div>
				</div>
			</main>
		</>
	)
}

