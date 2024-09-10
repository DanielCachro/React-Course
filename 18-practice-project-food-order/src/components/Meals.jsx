import {useEffect, useState} from 'react'
import MealCard from './MealCard'
import {fetchMeals} from '../http'

export default function Meals() {
	const [meals, setMeals] = useState([])
	const [error, setError] = useState('')
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		async function getMeals() {
			setIsFetching(true)
			try {
				const meals = await fetchMeals()
				setMeals(meals)
				setIsFetching(false)
			} catch (error) {
				setError(error.message)
			}
			setIsFetching(false)
		}

		getMeals()
	}, [])

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
