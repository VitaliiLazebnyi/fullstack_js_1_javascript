// Реализовать функцию для случайной сортировки элементов массива

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(shuffle(array));
console.log(shuffle(array));
console.log(shuffle(array));
