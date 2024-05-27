/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let flag = 0, 
    numberOfFilms;

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

writeYourGenres();

// showMyDB(personalMovieDB.privat);

// rememberMyFilms();

// detectPersonalLevel();

function start() {
    numberOfFilms = +prompt('Cколько фильмов смотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cколько фильмов смотрели?');
    }
}

function rememberMyFilms() {
    while (flag < 2) {

        let a = prompt('ласт фильм?');
    
        if (a != null) {
    
            if (a.length < 50 && a != '') {
    
                while (1) {
    
                    let b = prompt('оценка??');
    
                    if (b != null && b != '') {
    
                        personalMovieDB.movies[a] = b;
                        flag++;
                        break;
                    } 
                }
            }
        }
    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
    
    } else if (numberOfFilms <= 30 && numberOfFilms >= 10) {
        alert('Вы классический зритель');
    
    } else if (numberOfFilms > 30) {
        alert('Вы киноман');
    
    } else {
        alert('Произошла ошибка')
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}:`);
    }
}