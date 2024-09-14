import {useCallback, useState} from 'react'

async function sendHttpRequest(url, configuration) {
	const response = await fetch(url, configuration)
	const resData = await response.json()

	if (!response.ok) {
		throw new Error(resData.message || 'An error occurred while sending the request.')
	}

	return resData
}

export function useHttp(initialData) {
	const [data, setData] = useState(initialData)
	const [error, setError] = useState('')
	const [isFetching, setIsFetching] = useState(false)

	const sendRequest = useCallback(async function sendRequest(url, configuration) {
		setIsFetching(true)
		try {
			const resData = await sendHttpRequest(url, configuration)
			setData(resData)
		} catch (error) {
			setError(error.message || 'Something went wrong!')
		}
		setIsFetching(false)
	}, [])

	return {
		data,
		error,
		isFetching,
		sendRequest,
	}
}
