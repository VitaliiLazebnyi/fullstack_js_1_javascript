// С помощью прототипа реализовать структуру "Квадрат"
// которая будет расширять структуру "Прямоугольник",
// должна быть возможность задавать размеры обеим фигурам
// и получать их площадь и периметр.

class Rectangle {
    constructor(length, height) {
        this.length = length;
        this.height = height;
    };

    get area() {
        return this.length * this.height;
    };

    get perimeter() {
        return 2 * (this.length + this.height);
    };
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

const rectangle = new Rectangle(2, 4);
const square    = new Square(4);

console.log(`Rectangle area is ${rectangle.area}`);
console.log(`Rectangle perimeter is ${rectangle.perimeter}`);

console.log(`Square area is ${square.area}`);
console.log(`Square perimeter is ${square.perimeter}`);