import { Quote } from '../model/Quote'
import { BlockQuote } from './BlockQuote'

type OnlyYodaQuotesProps = { isLoading?: boolean, quotes?: Quote[] }

export function OnlyYodaQuotes({isLoading = true, quotes = [] } : OnlyYodaQuotesProps) {

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
