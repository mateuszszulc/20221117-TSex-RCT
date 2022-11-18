import { format } from 'date-fns'
import PropTypes from 'prop-types'
import { withDate } from '../hoc/withDate'

function formatFancyDate(inputDate: any) {
	if(inputDate instanceof Date) {
		return format(inputDate, 'qqqq | d LLLL | GGGG yyyy, Do');
	}
	return '[no-date]';
}

IAlsoNeedADate.propTypes = {
	date: PropTypes.object.isRequired
}

function IAlsoNeedADate ({date}: {date: any}) {
	return (
		<div className="bg-dark text-light rounded p-2 my-3">
			What can be expressed as: <strong className="bg-white text-dark p-1">
				{ formatFancyDate(date) }
			</strong>
		</div>
	)
}

export default withDate(IAlsoNeedADate)
