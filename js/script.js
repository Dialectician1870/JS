/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
//нужна эта хуйня для того, чтобы скрипт подрубался
//после загрузки всего контента на страницу(фоточки и тп)
    const movieDB = {
        movies: [
            "Лига справедливости",
            "Zalupa",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm != '') {
            if (newFilm.length > 21) {
                newFilm = newFilm.substring(0, 22) + '...';
                //делает обрезание до 22го символа (не включая)
            }
            movieDB.movies.push(newFilm);

            movieDB.movies = lowerAllStr(movieDB.movies);
            
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
            
            e.target.reset();

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
        }
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) =>{
        arr.sort();
    };

    const lowerAllStr = (arr) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i].toLowerCase());
        }
        return newArr;
    };

    function createMovieList(films, parent) {
        movieDB.movies = lowerAllStr(movieDB.movies);
        
        sortArr(movieDB.movies);

        parent.innerHTML = "";
    
        films.forEach((item, i) => {

            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                // удаляет начиная с i-го номера массива 1 элемент, включай i-ый номер
                createMovieList(films, parent);
                // используем рекурсию, чтобы номера не сбивались
            });
        })
    };

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});