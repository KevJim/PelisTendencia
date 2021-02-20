import getTopMoviesIds from '../utils/getTopMovies';
import getTopMovies from '../utils/getTopMovies';

const Home = async () => {
	const movie = await getTopMovies();
	const listItem = document.createElement('li');
	const movies = [];

	for (const id of ids) {
		const movie = await movie(id);
		movies.push(movie);
	}

	return movies;
	const view = `
        <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" />
        <h5>${movie.title}</h5>
        <p>Released on <em>${movie.release_date}</em></p>
    `;
	return view;
};

export default Home;
