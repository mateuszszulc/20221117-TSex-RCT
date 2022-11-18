import { BlockQuote } from './BlockQuote'

export function OnlyYodaQuotes({ isLoading, quotes }: any) {

	//@ts-ignore
	const yodaQuotes = quotes.filter((q) => q.author === 'Yoda')

	return (
		<section className="panel is-info">
			<p className="panel-heading">
				Yoda quotes
			</p>
			{ isLoading &&
				<div className="panel-block"> loading... </div>
			}
			{ !isLoading &&
				yodaQuotes.map((q: any) => (<BlockQuote key={q.text} quote={q} />))
			}
		</section>
	)
}
