import {useEffect} from 'react'
import MealCard from './MealCard'
import {useHttp} from './hooks/useHttp'

export default function Meals() {
	const {data: meals, error, isFetching, sendRequest} = useHttp([])

	useEffect(() => {
		sendRequest('http://localhost:3000/meals')
	}, [sendRequest])

	return (
		<>
			<ul id='meals'>
				{isFetching && <li>Fetching meals...</li>}
				{!error && meals.map(meal => <MealCard key={meal.id} meal={meal} />)}
				{error && <li className='error'>{error}</li>}
			</ul>
		</>
	)
}
