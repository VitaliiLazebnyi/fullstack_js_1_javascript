// Калькулятор
//
// Создайте калькулятор позволяющий добавлять в него
// дополнительные методы и сохранять результат, по
// умолчанию должны присутствовать методы add, substract
//
// Пример:
//     const calculator = new Calc()
//
// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5
//
// Также, он должен хранить историю всех операций и выводить
// ее по запросу:
//
//     calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*',
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
//
// И очищать историю
// calculator.clearHistory()
// calculator.history() // []

module.exports = function Calc() {
    let historyArray = [];
    let operations   = {};

    const history      = () => historyArray;
    const addOperation =
        (oper, func) => operations[oper] = func;

    addOperation('+', (a, b) => a + b );
    addOperation('-', (a, b) => a - b );

    const operation    = (string) => {
        let [a, oper, b] = string.split(' ');
        a = Number(a);
        b = Number(b);

        historyArray.push({
            operation: oper,
            operands: [a, b]
        });

        return operations[oper](a, b);
    };

    const clearHistory = () => historyArray = [];

    return {
        operation,
        addOperation,
        history,
        clearHistory
    }
}
