import { useEffect, useState } from 'react'
import { starWarsQuotesService } from './services/swQuotesService'
import { MemorableQuotes } from './components/MemorableQuotes'
import { OnlyYodaQuotes } from './components/OnlyYodaQuotes'
import { Quote } from './model/Quote'

export function AppFunctionAsAChildComponent() {

	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<Quote[]>([])

	useEffect(() => {
		setLoading(true)
		starWarsQuotesService.getAll()
			.then(quotes => setQuotes(quotes))
			.finally(() => setLoading(false))
	}, [])

	const yodaQuotes = quotes.filter(q => q.author === 'Yoda')

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
						<MemorableQuotes isLoading={isLoading} quotes={quotes} />
					</div>
					<div className="column">
						<OnlyYodaQuotes isLoading={isLoading} quotes={yodaQuotes} />
					</div>
				</div>
			</main>
		</>
	)
}
