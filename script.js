// touchstart
// коснулись пальцем и событие выполнилось

// touchmovе
// если палец при касании пальца начинает двигаться по нему, то при каждом
// смещенни пальца будет срабатывать touchmovе

// toucchend
// выполняется после того, как убрали палец

// touchenter
// вели пальцем по экрану, и навели на какой-то элемент, на котором навешено это событие
// т. е. как только палец зашел за пределы этого элемента

// touchleave
// противоположное событие, палец ушел за пределы этого элемента

// touchcancel
// например, серфили браузер, а палец ушел за границы браузера 


window.addEventListener('DOMContentLoaded', (e) => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('asdwd');
        // console.log(e.touches);
        // выдает список всех пальцев, которые сейчас взаимодействуют с экраном
        // те, которые сейчас тапнули и держат на мониторе

        console.log(e.targetTouches);
        // на случай если нас интересуют все пальцы, которые взаимодействую конкретно
        // с этим элементом

        console.log(e.changedTouches);
        // cписок пальцев, которые учавствуют в текущем событии
        // например, если это событие touchend, то список будет содержать палец,
        // который был убран, даже если остальные 4 пальца до сих пор на экране,
        // т. е. это пальцы которые совершили определенное, назначенное уже действие
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();

    //     console.log('move');
    //     выводиться каждый раз, когда сдвигаешься хоть на пиксель
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

});