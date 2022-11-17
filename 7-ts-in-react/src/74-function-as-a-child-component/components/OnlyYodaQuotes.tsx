import React, { useEffect, useState } from 'react'
import { starWarsQuotesService } from '../services/swQuotesService'
import { BlockQuote } from './BlockQuote'

export function OnlyYodaQuotes() {
	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<any[]>([])

	useEffect(() => {
		setLoading(true)
		starWarsQuotesService.getAll()
			.then((quotes) => {
				const yodaQuotes = quotes.filter((q: any) => q.author === 'Yoda')
				setQuotes(yodaQuotes)
			})
			.finally(() => setLoading(false))
	}, [])

	return (
		<section className="panel is-info">
			<p className="panel-heading">
				Yoda quotes
			</p>
			{ isLoading &&
				<div className="panel-block"> loading... </div>
			}
			{ !isLoading &&
				quotes.map((q) => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
