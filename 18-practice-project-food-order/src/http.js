export async function fetchMeals() {
	const response = await fetch('http://localhost:3000/meals')
	const data = response.json()

	if (!response.ok) {
		throw new Error('Failed to fetch meals.')
	}

	return data
}
