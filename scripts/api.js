const BASE_URL = "https://api-listfilm.vercel.app"

fetchMovies();

 async function fetchMovies() {
    try {
		const response = await fetch(`${BASE_URL}/movies`)
		if (!response.ok){
			throw new Error(`Error fetching movies`);
		}

		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}