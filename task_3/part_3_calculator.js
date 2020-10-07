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

function Calc() {
    this.historyArray = [];
    this.operations   = {};

    this.history      =
        () => this.historyArray;
    this.addOperation =
        (oper, func) => this.operations[oper] = func;
    this.addOperation('+', (a, b) => a + b );
    this.addOperation('-', (a, b) => a - b );

    this.operation    = (string) => {
        let [a, oper, b] = string.split(' ');
        a = Number(a);
        b = Number(b);

        this.historyArray.push({
            operation: oper,
            operands: [a,b]
        });

        return this.operations[oper](a, b);
    };

    this.clearHistory = () => this.historyArray = [];
}

const calculator = new Calc();
console.log(calculator.operation('31 + 32'));
calculator.addOperation('/', (a, b) => a / b);
console.log(calculator.operation('30 / 15'));
console.log(calculator.history());
calculator.clearHistory();
console.log(calculator.history());