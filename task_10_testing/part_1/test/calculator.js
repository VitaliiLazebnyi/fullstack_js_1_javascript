const assert = require('assert');
const Calc = require('../lib/calculator');

describe('Calc()', () => {
    const calculator = new Calc();

    it('can summ', () => {
        assert.deepEqual(
            calculator.operation('31 + 32'),
            63
        );
    });

    it('can provide custom operations', () => {
        calculator.addOperation('/', (a, b) => a / b)
        assert.deepEqual(
            calculator.operation('30 / 15'),
            2
        );
    });

    it('can provide operations history', () => {
        assert.deepEqual(
            calculator.history(),
            [
                { operands: [ 31, 32 ], operation: '+' },
                { operands: [ 30, 15 ], operation: '/' }
            ]
        );
    });

    it('can clear operations history', () => {
        calculator.clearHistory()
        assert.deepEqual(
            calculator.history(),
            [ ]
        );
    });
});
