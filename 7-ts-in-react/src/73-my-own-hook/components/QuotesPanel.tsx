import { useQuotes } from '../hooks/useQuotes';
import { Quote } from '../model/Quote';
import { QuotesPanelBlock } from './QuotesPanelBlock';

type QuotesPanelProps = { title?: string, filterBy?: string }

function QuotesPanel({ title = 'All quotes', filterBy = '' }: QuotesPanelProps) {

	const {isLoading, quotes} = useQuotes<Quote[]>(
		[], 
		(quotes: Quote[]) => quotes.filter(q => q.author.includes(filterBy))
	)

	return (
		<section className="panel is-info">
			<p className="panel-heading">
				{title}
			</p>
			{isLoading &&
				<div className="panel-block"> loading... </div>
			}
			{!isLoading &&
				quotes.map((q: any) => (<QuotesPanelBlock key={q.text} quote={q} />))
			}
		</section>
	)
}

export default QuotesPanel
