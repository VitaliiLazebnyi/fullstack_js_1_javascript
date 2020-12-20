const assert = require('assert');

function sortDesc(array) {
    return array.sort((el1, el2) => el2 - el1);
}

describe('sortDesc()', () => {
  it('it sorts numbers in array properly', () => {
    assert.deepEqual(
        sortDesc([-20, -10, 0, 10, 20, 30]),
            [30, 20, 10, 0, -10, -20]);
  });
});
