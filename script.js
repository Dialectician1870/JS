// console.log(document.head);
//выводит только бошку
// console.log(document.documentElement);
//выводит фулл структуру html

// console.log(document.body.childNodes);
//позволяет получить все элементы внутри бади, для него аналога с Element

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
//угадай что
// console.log(document.body.firstElementChild);
//чекай коммент на 20 строчке

// console.log(document.querySelector('#current').parentNode);
//вернет родителя current
// console.log(document.querySelector('#current').parentNode.parentNode);
//вернет родителя родителя current
// console.log(document.querySelector('#current').parentElement);
//Особо рофла не понял, по сути то же самое, только сто проц вернется элемент

// console.log(document.querySelector('[data-current="3"]').nextSibling);
//вернет следущего соседа
// console.log(document.querySelector('[data-current="3"]').previousSibling);
//вернет предыдущего соседа
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
//тоже самое, только вернет элемент нормальный а не ебучий текст(ноду), который обозначает перенос строки

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }

    console.log(node);
}
//замена childNodes, чтобы выводила только элементы