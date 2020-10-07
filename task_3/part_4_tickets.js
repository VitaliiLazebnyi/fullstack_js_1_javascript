// Система продажи билетов
//
// Реализовать систему продажи билетов, которая позволит
// продавать билеты и возвращать их
// ticketWindow.createEvent('Concert', 500) // создаем концерт
// и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет
// в кассу, возвращаем случайный шестизначный ID билета, создать
// ID можно любым способом */
//
// ticketWindow.returnTicket('123456') /* Возвращаем билет, если
// в системе такой id записан как проданный, он должен быть удален
// из списка проданных и из кассы должна быть вычтена соответствующая
// его цене сумма */

function sellTickets() {
    this.concertsList = [];
    this.ticketsList  = [];

    this.createEvent = (title) => this.concertsList.push(title);
    this.sellTicket  = (title) => {
        let id = Math.random().toString(36).substr(3, 6);
        this.ticketsList.push(id);
        return id;
    }

    this.returnTicket = (id) => {
        let index = this.ticketsList.indexOf(id);
        this.ticketsList.splice(index, 1);
        return this.ticketsList;
    };

    this.tickets      = () => this.ticketsList;

}

const ticketWindow = new sellTickets();
ticketWindow.createEvent('Evans');

id = ticketWindow.sellTicket('Evans')
console.log(ticketWindow.tickets());
console.log(id);
ticketWindow.returnTicket(id)
console.log(ticketWindow.tickets());
