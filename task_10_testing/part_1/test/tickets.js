const assert = require('assert');
const sellTickets = require('../lib/tickets');

describe('sellTickets()', () => {
    const ticketWindow = new sellTickets();

    it('can create event', () => {
        assert.equal(
            ticketWindow.createEvent('Evans', 200),
            200
        );
    });

    it('can show how much monay is collected', () => {
        const ticketWindow = new sellTickets();
        ticketWindow.createEvent('Evans', 200),
        ticketWindow.sellTicket('Evans')
        assert.equal(
            ticketWindow.getMoney(),
            200
        );
    });

    it('can sell and return ticket', () => {
        const ticketWindow = new sellTickets();
        ticketWindow.createEvent('Evans', 200)
        const id = ticketWindow.sellTicket('Evans')
        ticketWindow.returnTicket(id)
        assert.equal(
            ticketWindow.getMoney(),
            0
        );
    });
});
