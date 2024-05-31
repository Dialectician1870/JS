const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };
// btn.onclick = function() {
//     alert('2nd click');
// };
//не юзабельное

// btn.addEventListener('click', () => {
//     alert('click');
// });
// btn.addEventListener('click', () => {
//     alert('2nd click');
// });
//здесь первое действие будет работать со вторым,

// let i = 0;
const deleteElement = (e) => {
    // console.log(e.target);
    //сначала работает на вложенном элементе, а потом вверх по дереву
    //НАЗЫВАЕТСЯ  ВСПЛЫТИЕМ СОБЫТИЙ!
    console.log(e.currentTarget);
    //разница в том, что мы ссылаемся на разные элементы, после, если можно так сказать, всплытия
    console.log(e.type);
    // i++;    
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('mouseenter', (e) => {
//     /*e = event(первый, обязательный аргумент), 
//     используется, если надо указать чето в качестве второго аргумента*/
//     console.log('hover');
//     console.log(e.target);
//     e.target.remove();
// });

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector("a");

link.addEventListener('click', function(e) {
    e.preventDefault();
    //"браузер, стой, ждем че скажет прогер", отменили стандарты поведения браузера, юзаем в начале блока-кода
    console.log(e.target);
})

btn.forEach(bt => {
    bt.addEventListener('click', deleteElement, {once: true});
    //с помощью этой опции, мы можем юзать эту хуйню, только 1 раз
});