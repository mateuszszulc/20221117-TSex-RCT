import { useQuotes } from '../hook/useQuotes'
import { QuotesPanelBlock } from './QuotesPanelBlock';

function QuotesPanel ({ filterBy = '', title = 'All Quotes' }: any ) {

	const { isLoading, quotes } = useQuotes(filterBy)

	return (
		<section className="panel is-info">
			<p className="panel-heading">
				{title}
			</p>
			{ isLoading &&
				<div className="panel-block"> loading... </div>
			}
			{ !isLoading &&
				quotes.map((q: any) => (<QuotesPanelBlock key={q.text} quote={q} />))
			}
		</section>
	)
}

export default QuotesPanel
