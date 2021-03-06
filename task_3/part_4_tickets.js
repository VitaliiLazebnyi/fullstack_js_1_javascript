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
    // let concertsList = {};
    let soldTicketsList = {};
    let money        = 0;
    let prices       = {};

    // psssss... no float prices ;)
    const createEvent = (title, price) => prices[title] = price;

    const sellTicket  = (title) => {
        let id = Math.random().toString(36).substr(3, 6);

        soldTicketsList[id] = title;
        money += prices[title];

        return id;
    }

    const returnTicket = (id) => {
        delete soldTicketsList[id];
        return soldTicketsList;
    };

    const tickets      = () => soldTicketsList;
    const getMoney     = () => money;


    return {
        prices,
        soldTicketsList,
        getMoney,
        createEvent,
        sellTicket,
        returnTicket,
        tickets
    }
}

const ticketWindow = new sellTickets();
ticketWindow.createEvent('Evans', 200);

id = ticketWindow.sellTicket('Evans')
console.log(ticketWindow.tickets());
console.log(ticketWindow.getMoney()); // 200
console.log(id);
ticketWindow.returnTicket(id)
console.log(ticketWindow.tickets());
console.log(ticketWindow.getMoney()); // 0
