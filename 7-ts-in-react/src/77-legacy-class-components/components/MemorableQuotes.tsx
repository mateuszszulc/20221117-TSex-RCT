import React, { Component } from 'react'
import { BlockQuote } from './BlockQuote'
import swQuotesService from '../services/swQuotesService'
import { Quote } from '../model/Quote'

type MemorableQuotesProps = {
	title: string
}

type MemorableQuotesState = {
	isLoading: boolean,
	quotes: Quote[],
	error?: Error
}

class MemorableQuotes extends Component<MemorableQuotesProps, MemorableQuotesState> {

	state: MemorableQuotesState = {
		isLoading: false,
		quotes: [],
		error: undefined
	}

	loadAllTheQuotes() {
		this.setState({ isLoading: true, error: undefined })
		swQuotesService.getAll()
			.then(quotes => {
				this.setState({ quotes, isLoading: false })
			})
			.catch((error: unknown) => {
				if (error instanceof Error) {
					this.setState({ error, isLoading: false })
				}
			})
	}

	componentDidMount() {
		this.loadAllTheQuotes();
	}

	render() {
		const { title } = this.props
		const { isLoading, quotes, error } = this.state;

		return (
			<section className="panel is-info">
				<p className="panel-heading">
					{title}
				</p>
				<div className="panel-block is-justify-content-right">
					<button className="button" onClick={() => this.loadAllTheQuotes()}> 🔁 Refresh </button>
				</div>
				{
					isLoading &&
					<div className="panel-block is-justify-content-center p-4">
						<div className="notification is-info is-light"> ⌛ loading... </div>
					</div>
				}
				{
					!isLoading &&
					!error &&
					quotes.map(q => <BlockQuote key={q.text} quote={q} />)
				}
				{
					error &&
					<div className="panel-block is-justify-content-center p-4">
						<div className="notification is-danger is-light">{error.message}</div>
					</div>
				}
			</section>
		)
	}
}

export default MemorableQuotes
