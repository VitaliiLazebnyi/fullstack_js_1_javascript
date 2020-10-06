//
// Реализовать функцию для фильтрации массива по длине слов,
// значения длины указываются включительно, фильтр должен
// работать так:
// const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
//
// filterByLength(fruits, 0, 5) // [‘apple’, ‘’]
//

const fruits = ['orange', 'apple', 'banana', ''];

function filterByLength(words, from, to){
    return words.filter(word => word.length >= from && word.length <= to);
}

console.log(filterByLength(fruits, 0, 5));