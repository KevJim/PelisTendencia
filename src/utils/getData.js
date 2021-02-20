const apiKey = 'b89fc45c2067cbd33560270639722eae';
const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

const getData = async (id) => {
	const apiURL = id ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}` : API;
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Fetch error', error);
	}
};

export default getData;
