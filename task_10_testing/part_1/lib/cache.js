//
// Кэширование
//
// Замыкания можно использовать для сохранения состояния
// и дальнейшей работы с ним.
//
// Реализуйте функцию cache, которая вернет функцию, возводящую
// число в степень и возвращающую результат.
// Функция должна запоминать аргументы, которые она уже получала
// и возвращать результат сразу, не вычисляя его повторно
//
// Пример:
//   const calculate = cache();
//
// calculate(3, 3);  // { value: 27,   fromCache: false }
// calculate(2, 10); // { value: 1024, fromCache: false }
// calculate(2, 10); // { value: 1024, fromCache: true  }
//

module.exports = function cache() {
    let store = {};

    const execute = (a, b) => {
        let operation = `${a}*${b}`;

        if (operation in store) {
            return {
                value: store[operation],
                cache: true
            };
        }

        store[operation] = a * b;

        return {
            value: store[operation],
            cache: false
        };
    };

    return execute;
}