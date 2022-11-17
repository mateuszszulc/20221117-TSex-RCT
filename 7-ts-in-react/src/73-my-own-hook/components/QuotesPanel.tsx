import { QuotesPanelBlock } from './QuotesPanelBlock';

function QuotesPanel ({ isLoading, quotes, title = 'Yoda quotes' }: any ) {
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
