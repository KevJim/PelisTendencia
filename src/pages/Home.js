import getTopMoviesIds from '../utils/getTopMovies';
import getData from '../utils/getData';

const Home = async () => {
	const movies = await getData();
	const view = `
        <div class="Movies">
            ${movies.results.map(movie => `
                <article class="Movie-item">
                    <a href="#/${movie.id}/">
                        <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}">
                        <h2>${movie.title}</h2>
                    </a>
                </article> 
            `).join('')}
        </div>
    `;
	return view;
};

export default Home;
