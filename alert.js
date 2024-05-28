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

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Cколько фильмов смотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Cколько фильмов смотрели?');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (numberOfFilms < 10) {
            alert('Просмотрено довольно мало фильмов');
        
        } else if (numberOfFilms <= 30 && numberOfFilms >= 10) {
            alert('Вы классический зритель');
        
        } else if (numberOfFilms > 30) {
            alert('Вы киноман');
        
        } else {
            alert('Произошла ошибка')
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
        //     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}:`);

        //     if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] =='') {
        //         i--;
        //         console.log('huinu sdelal')
        //     }
        // }
            let genres = prompt(`Введите ваши любимые жанры через запятую:`).toLowerCase();

            if (genres[i] == null || genres[i] =='') {
                i--;
                console.log('huinu sdelal');

            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`)
        })
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

// personalMovieDB.start();

// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();