import { useState, useEffect } from "react"
import { swQuotesService } from "../services/swQuotesService"

export function useQuotes<T>(initialData: T, filterFn: (data: T) => T) {
	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<T>(initialData)

	useEffect(() => {
		setLoading(true)
		swQuotesService.getAll()
			.then(quotes => {
				setQuotes(filterFn(quotes))
			})
			.finally(() => setLoading(false))
	}, [filterFn])

	return { isLoading, quotes }
}