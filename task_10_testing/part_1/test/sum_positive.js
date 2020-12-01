let assert = require('assert')
let sumPositive = require('../lib/sumPositive');

describe('sumPositive()', () => {
    it('returns sum of positive numbers', () => {
        assert.equal(sumPositive([2, -50, 4]), 6);
    })

    it('accepts empty array', () => {
        assert.equal(sumPositive([]), 0);
    })

    it('ignores invalid array elements', () => {
        assert.equal(
            sumPositive(['invalid', {}, [], ()=>{}]),
            0
        );
    })

    it('returns 0 for nonArray parameters', () => {
        assert.equal(
            sumPositive('nonArray'),
            0
        );
    })
})
