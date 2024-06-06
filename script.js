// классы это красивая обертка функций конструкторов, классы внутри - те же функции
'use strict'

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width
    }
}

class ColorredRectangleWithText extends Rectangle {
    // новый класс наследуется от Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width);
        // вызывает содержимое конструктора родителя
        // всегда должна быть на первом месте в новом конструкторе
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Teкст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColorredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());
console.log(div);


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long);