import { MemorableQuotes } from './components/MemorableQuotes'
import { OnlyYodaQuotes } from './components/OnlyYodaQuotes'
import { QuoteProvider } from './providers/QuoteProvider'

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
				<QuoteProvider>
					{
						(isLoading, quotes, refetch) => {
							const yodaQuotes = quotes.filter(q => q.author === 'Yoda')
							return (
								<div className="columns">
									<div className="">
										<button onClick={() => refetch()}>Refetch</button>
									</div>
									<div className="column">
										<MemorableQuotes isLoading={isLoading} quotes={quotes} />
									</div>
									<div className="column">
										<OnlyYodaQuotes isLoading={isLoading} quotes={yodaQuotes} />
									</div>
								</div>
							)
						}
					}
				</QuoteProvider>
			</main>
		</>
	)
}
