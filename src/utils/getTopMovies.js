import getData from '../utils/getData';

async function getTopMoviesIds(n = 10) {
	const popularMovies = await getData();
	const ids = popularMovies.slice(0, n).map((movie) => movie.id);
	return ids;
}

export default getTopMoviesIds;
