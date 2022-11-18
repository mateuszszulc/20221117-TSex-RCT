import { useState, useEffect } from "react"
import { starWarsQuotesService } from "../../74-function-as-a-child-component/services/swQuotesService"
import { Quote } from "../model/Quote"

export function useQuotes(filterBy = '') {
	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<Quote[]>([])

	useEffect(() => {
		setLoading(true)
		starWarsQuotesService.getAll()
			.then(quotes => setQuotes(quotes.filter(q => q.author.includes(filterBy))))
			.finally(() => setLoading(false))
	}, [filterBy])

	return { isLoading, quotes }
}