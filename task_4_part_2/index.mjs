// Реализовать 2 разных типа верфей, каждая из которых
// должна будет специализироваться на своем типе кораблей
//
// Для моторных кораблей доступны следующие
// специфичные характеристики:
//     Мощность двигателя
//     Материал корпуса
//
// Для парусных кораблей доступны следующие
// специфичные характеристики:
//     Количество мачт
//     Общая площадь парусов
//
// Что можно делать в верфи:
//     Строить корабли - Должен проверяться тип корабля,
// работать только с кораблями своего типа
//     Ремонтировать корабли - Должен проверяться тип корабля,
// работать только с кораблями своего типа
//     Перекрашивать корабли - Можно красить любые корабли
//     Обменивать старый корабль на новый - Можно обменивать
// только корабли того же типа
//
//     Главное требование: Чистый код, весь дублирующийся код
// для кораблей и верфей должен быть вынесен в их прототипы.
// Задание потребует воспользоваться гуглом для решения.
//
//     Верфи и корабли должны создаваться с помощью
// функций-конструкторов.

import { MotorDockyard, YachtDockyard } from './Dockyards.mjs';

let motor_dockyard = new MotorDockyard;
let yacht_dockyard = new YachtDockyard;

let ships = [];
ships.push(
    motor_dockyard.buildShip({color: 'red'})
);

ships.push(
    yacht_dockyard.buildShip({color: 'red'})
);

console.log(ships);
yacht_dockyard.paint(ships[0], 'white');
motor_dockyard.paint(ships[0], 'red');

console.log(ships);

yacht_dockyard.fixShip(ships[0]);
yacht_dockyard.exchangeShip(ships[0]);

console.log(ships);
console.log(ships.map((ship)=> ship.color));
ships['']
