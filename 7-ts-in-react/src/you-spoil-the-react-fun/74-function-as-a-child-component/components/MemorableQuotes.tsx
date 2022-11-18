import { BlockQuote } from './BlockQuote'

export function MemorableQuotes({ isLoading, quotes }: any) {
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
				quotes.map((q: any) => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
