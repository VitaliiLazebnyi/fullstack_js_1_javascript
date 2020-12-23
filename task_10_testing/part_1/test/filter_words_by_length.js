const assert = require('assert');

function filterByLength(words, from, to){
    return words.filter(word => word.length >= from && word.length <= to);
}

describe('filterByLength()', () => {
  it('it filters words by length', () => {
    assert.deepEqual(
        filterByLength(['orange', 'apple', 'banana', ''], 0, 5),
            ['apple', '']);
  });
});
