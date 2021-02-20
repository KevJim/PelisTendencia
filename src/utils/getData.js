const apiKey = 'b89fc45c2067cbd33560270639722eae';
const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

const getData = async (id) => {
	// const apiURL = id ? `${API}${id}` : API;
	const response = await fetch(API);
	const data = await response.json();
	return data.results;
};

export default getData;
