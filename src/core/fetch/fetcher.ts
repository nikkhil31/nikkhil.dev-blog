const fetcher = async (query: string) => {
	const response = await fetch('https://gql.hashnode.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query
		})
	})

	const responseBody = await response.json()

	if (responseBody.errors) {
		console.error('GraphQL error:', responseBody.errors)
		throw new Error('Error fetching GraphQL data')
	}

	return responseBody.data
}


export default fetcher