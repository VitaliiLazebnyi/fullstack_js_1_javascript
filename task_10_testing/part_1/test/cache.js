const assert = require('assert');
const cache = require('../lib/cache');

// console.log(calculator)
// console.log(calculator(2,3));
// console.log(calculator(3,3));
// console.log(calculator(2,3));
// console.log(calculator.store);

describe('cache()', () => {
  const calculator = cache();

  it('calculates, no cache', () => {
      assert.deepEqual(
          calculator(2,3),
          { "cache": false, "value": 6 }
          );
  });

  it('returns calculated from cache', () => {
      assert.deepEqual(
          calculator(2,3),
          { "cache": true, "value": 6 }
      );
  });

  it('calculates other values when something present in cache', () => {
      assert.deepEqual(
          calculator(3,3),
          { "cache": false, "value": 9 }
      );
  });
});
