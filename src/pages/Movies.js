import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Movies = async () => {
	const id = getHash();
	const movie = await getData(id);
	const view = `
        <div class="Movie-inner">
            <article class="Movie-card">
                <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.title}</h2>
            </article>
            <article class="Characers-card">
                <h3>Fecha de Lanzamiento: <span>${movie.release_date}</span></h3>
                <h3>Calificación:<span>${movie.vote_average}</span></h3>
                <h3>Sipnosis: <span>${movie.overview}</span></h3>
            </article>
        </div>
    `;
	return view;
};

export default Movies;
