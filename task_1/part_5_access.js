// Реализовать if для проверки доступа
// Выполняется проверка прав доступа пользователя к сайту при
// соблюдении следующих условий:
// 1. Возраст от 18 до 35 лет
// 2. Оплачена месячная подписка
// 3. Не действует блокировка
// 4. Имя пользователя не содержит внутри себя запрещенные слова
// Если пользователь является администратором, для получения
// доступа достаточно соблюдения только первого условия
// Информация о пользователе хранится в объекте такого вида:
// {
//    age: 18,
//    paid: true,
//    blocked: false,
//    badUsername: false,
//    isAdmin: false
// }
//
// Переписать if с помощью тернарного оператора
// ( Да, это будет выглядеть страшно )

const user_data = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}

function proper_age(user_data) {
    return user_data.age >= 18 || user_data.age <= 35
}

function has_access_with_if(user_data) {
    if ( proper_age(user_data) && user_data.isAdmin ) {
        return true;
    }

    if ( proper_age(user_data) &&
         user_data.paid &&
        !user_data.blocked &&
        !user_data.badUsername) {
        return true;
    }

    return false;
}

console.log(has_access_with_if(user_data));

function has_access_with_ternary(user_data) {
    return ( proper_age(user_data) &&  user_data.isAdmin)     ? true
         : ( proper_age(user_data) &&  user_data.paid &&
            !user_data.blocked     && !user_data.badUsername) ? true
         : false;
}

console.log(has_access_with_ternary(user_data));
