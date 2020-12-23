const assert = require('assert');
const MoneyBox = require('../lib/moneybox');

describe('Moneybox', () => {
    it('initialized with 0 amount', () => {
        const box = MoneyBox();
        assert.equal(
            box.getAmount(),
            0
        );
    });

    it('money can be added', () => {
        const box = MoneyBox();
        box.addCoin()
        assert.equal(
            box.getAmount(),
            1
        );
    });

    it('coints number cannot be edited from outside', () => {
        const box = MoneyBox();
        box.coins = 777;
        assert.equal(
            box.getAmount(),
            0
        );
    });

});
