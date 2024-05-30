'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    firstHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

let num = 500;

box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
// не юзабельно

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
// юзабельно

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); - оч редко юзают

div.classList.add('black');

// document.body.append(div); - добавляет черный блок В КОНЦЕ

wrapper.append(div);
// wrapper.appendChild(div); - старая хуйня
// добавляет тот же блок в обертке
// wrapper.prepend(div);
// добавляет черный блок В НАЧАЛЕ

// hearts[0].before(div);
// вставит перед 1ым сердечком
// hearts[0].after(div);
// вставит после 1го сердечка

//methods prepend, append, before, after did not exist before, the insertBefore method was used.

// wrapper.insertBefore(div, hearts[1]); - cтарый метод

// circles[0].remove();
// guess what
// wrapper.removeChild(hearts[1]);
//неудобная доисторическая залупа

// hearts[0].replaceWith(circles[0]);
//заебись
// wrapper.replaceChild(circles[0], hearts[0]);
//хуйня

div.innerHTML = '<h1>hello world</h1>'; 
// оч часто юзается МОЖНО ХУЯРИТЬ HTML СТРУКТУРУ!

div.insertAdjacentHTML("beforebegin", '<h2>hello</h2>');

// div.textContent = '<h1>hello world'; 
// реже юзается НЕЛЬЗЯ ХУЯРИТЬ HTML СТРУКТУРУ!
//метод нужен, чтоюы юзер ввел ТОЛЬКО ТЕКСТ, опездал не должен изменить страницу