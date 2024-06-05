// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hello');
// второй параметр это время в мс
// третий параметр передается в параметр функции


// setTimeout(logger, 2000);

// function logger() {
//     console.log('text');
// }
// эта хуйня работает точь в точь, как и код выше. Когда мы записываем setTimeout в какую-то
// переменную, мы записываем числовой индетификатор этого таймера 


// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId);

// function logger() {
//     console.log('text');
// }
//здесь в консоли нихуя не появится

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
//     // каждые 2 сек будет вызываться logger()
// })
// clearInterval(timerId);
// // когда мы инициализировали timerId внутри обработчика, не могли юзать ибо локальная переменная
// // эта хуйня не будет останавливать нихуя

// function logger() {
//     console.log('text');
//     i++;
// }


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
    // каждые 2 сек будет вызываться logger()
})

function logger() {
    if (i === 3) {
        clearInterval(timerId);
        // выведет в консоли 4 hello
    }
    console.log('text');
    i++;
}

let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500)