//
// Реализовать функцию для фильтрации массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
//
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]
//

const numbers = [-20, -10, 0, 10, 20, 30]

function sortDesc(array) {
    return array.sort((el1, el2) => el2 - el1);
}

console.log(sortDesc(numbers));
// [30, 20, 10, 0, -10, -20]