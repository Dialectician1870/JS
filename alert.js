const numberOfFilms = +prompt('Cколько фильмов смотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('ласт фильм?');
const b = prompt('Оценка?');
const c = prompt('ласт фильм?');
const d = prompt('Оценка?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;