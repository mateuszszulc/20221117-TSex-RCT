import { useParams } from 'react-router-dom';

export function AdvicesSiteDetails () {

	const { articleId } = useParams();

	return (
		<div> You chosen id: { articleId } </div>
	)
}


