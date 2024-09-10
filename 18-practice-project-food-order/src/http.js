export async function fetchMeals() {
	const response = await fetch('http://localhost:3000/meals')
	const resData = await response.json()

	if (!response.ok) {
		throw new Error('Failed to fetch meals.')
	}

	return resData
}

export async function postOrder(cart, form) {
	const response = await fetch('http://localhost:3000/orders', {
		method: 'POST',
		body: JSON.stringify({order: {items: cart, customer: form}}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	const resData = await response.json()

	if (!response.ok) {
		throw new Error('Failed to submit order! Try again later.')
	}

	return resData
}
