import React, {  useEffect, useState } from 'react'
import { starWarsQuotesService } from '../services/swQuotesService'
import { BlockQuote } from './BlockQuote'

export function MemorableQuotes() {
	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<any[]>([])

	useEffect(() => {
		setLoading(true)
		starWarsQuotesService.getAll()
			.then((quotes) => {
				setQuotes(quotes)
			})
			.finally(() => setLoading(false))
	}, [])


	return (
		<section className="panel is-primary">
			<p className="panel-heading">
				All quotes
			</p>
			{
				isLoading &&
				<div className="panel-block"> loading... </div>
			}
			{
				!isLoading &&
				quotes.map((q) => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
