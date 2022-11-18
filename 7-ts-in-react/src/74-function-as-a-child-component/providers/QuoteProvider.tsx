import { ReactNode, useEffect, useState } from "react"
import { Quote } from "../model/Quote"
import { starWarsQuotesService } from "../services/swQuotesService"

type DataProviderFn = (isLoading: boolean, quotes: Quote[], refetch: () => void) => ReactNode
type QuoteProviderProps = { children: DataProviderFn }

export function QuoteProvider({ children }: QuoteProviderProps) {

	const [isLoading, setLoading] = useState(false)
	const [quotes, setQuotes] = useState<Quote[]>([])

	const refetch = () => {
		setLoading(true)
		starWarsQuotesService.getAll()
			.then(quotes => setQuotes(quotes))
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		refetch()
	}, [])

	return (
		<>
			{children(isLoading, quotes, refetch)}
		</>
	)
}