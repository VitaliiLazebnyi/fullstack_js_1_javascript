// Модифицировать прототип Array, добавив в него метод shuffle,
// чтобы получить возможность выполнять случайную сортировку
// для любого массива

Array.prototype.shuffle = function() {
    let j, temp;
    for(let i = this.length - 1; i > 0; i--) {
        j = Math.floor(Math.random()*(i + 1));
        temp    = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arr);

arr.shuffle();
console.log(arr);

arr.shuffle();
console.log(arr);



