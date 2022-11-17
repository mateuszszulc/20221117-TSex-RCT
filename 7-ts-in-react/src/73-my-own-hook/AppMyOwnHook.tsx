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
						<QuotesPanel isLoading={true} quotes={[]} title="All quotes" />
					</div>
					<div className="column">
						<QuotesPanel isLoading={true} quotes={[]} />
					</div>
				</div>
			</main>
		</>
	)
}

