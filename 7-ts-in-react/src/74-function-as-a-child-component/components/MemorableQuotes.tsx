import { Quote } from '../model/Quote'
import { BlockQuote } from './BlockQuote'

type MemorableQuotesProps = { isLoading?: boolean, quotes?: Quote[] }

export function MemorableQuotes({ isLoading = true, quotes = [] }: MemorableQuotesProps) {

	// TASK: Lift state UP to AppFunctionAsAChildComponent !
	// Use proper types wherever you know it

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
				quotes.map(q => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
