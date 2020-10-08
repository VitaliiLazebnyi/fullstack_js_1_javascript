// Копилка
//
// Замыкания могут применяться для простой реализации инкапсуляции,
// т.е. для того чтобы скрыть реализацию какой-то функциональности.
//
// Реализуйте функцию MoneyBox, который будет создавать объект с
// двумя методами:
//
// addCoin - Добавляет 1 монету в копилку
// getAmount - Возвращает количество монет в копилке
//
// Не должно быть возможности задать количество монет напрямую,
// минуя метод addCoin. При создании в копилке нет монет.
//
// Пример:
//   const box = new MoneyBox();
//
// box.getAmount(); // 0
// box.addCoin();
// box.addCoin();
// box.getAmount(); // 2

function MoneyBox() {
    let coins     = 0;

    const getAmount = () => coins;
    const addCoin   = () => coins++;

    return {
        getAmount,
        addCoin
    };
}

const box = MoneyBox();

console.log(box.getAmount()); // 0

console.log(box.getAmount()); // 0
box.addCoin();
box.addCoin();
console.log(box.getAmount()); // 2
console.log(box.coins);       // undefined
box.coins++;
console.log(box.coins);       // NaN
box.coins = 777;
console.log(box.getAmount()); // 2
box.coins++;
console.log(box.getAmount()); // 2
console.log(box.coins);       // 2
