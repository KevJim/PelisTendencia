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
            <article class="Movies-card">
                <h3>Fecha de Lanzamiento: </h3><span>${movie.release_date}</span>
                <h3>Calificación: </h3><span>${movie.vote_average}</span>
                <h3>Sipnosis: </h3><span>${movie.overview}</span>   
            </article>
        </div>
    `;
	return view;
};

export default Movies;
