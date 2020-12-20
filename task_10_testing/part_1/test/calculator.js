const assert = require('assert');
const calculator = require('../lib/calculator');

// const calculator = new Calc();
// console.log(calculator.operation('31 + 32'));
// calculator.addOperation('/', (a, b) => a / b);
// console.log(calculator.operation('30 / 15'));
// console.log(calculator.history());
// calculator.clearHistory();
// console.log(calculator.history());


describe('cache()', () => {
  it('calculates, no cache', () => {
      assert.deepEqual(
          calculator(2,3),
          { "cache": false, "value": 6 }
          );
  });
});
