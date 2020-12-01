const assert = require('assert');
const sumPositive = require('../lib/sumPositive');

describe('sumPositive()', () => {
  it('returns sum of positive numbers', () => {
    assert.deepEqual(sumPositive([2, -50, 4]), {
      count: 2,
      sum: 6,
    });
  });

  it('accepts empty array', () => {
    assert.deepEqual(
        sumPositive([]), {
          count: 0,
          sum: 0,
        },
    );
  });

  it('ignores invalid array elements', () => {
    assert.deepEqual(
        sumPositive(['invalid', {}, [], ()=>{}]), {
          count: 0,
          sum: 0,
        },
    );
  });

  it('returns 0 for nonArray parameters', () => {
    assert.deepEqual(
        sumPositive('nonAnArray'), {
          count: 0,
          sum: 0,
        },
    );
  });
});
