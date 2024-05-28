'use strict';

const box = document.getElementById('box');
console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

const btns = document.getElementsByTagName('button')[1];
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); //новейший ебейший метод

console.log(hearts);

// hearts.forEach(item => {
//     console.log(item)
// })

const firstHeart = document.querySelector('.heart'); //выдает первый элемент, который попал под этот селектор
console.log(firstHeart);