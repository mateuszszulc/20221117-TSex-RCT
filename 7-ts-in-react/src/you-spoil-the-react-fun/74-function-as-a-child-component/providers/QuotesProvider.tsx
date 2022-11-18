import { useEffect, useState } from "react"
import { starWarsQuotesService } from "../services/swQuotesService"

export function QuotesProvider({ children }: any) {

    const [isLoading, setLoading] = useState(false)
    const [quotes, setQuotes] = useState<any>([])

    useEffect(() => {
        setLoading(true)
        starWarsQuotesService.getAll()
            .then((quotes) => {
                setQuotes(quotes)
            })
            .finally(() => setLoading(false))
    }, [])


    return children({ isLoading, quotes })
}
