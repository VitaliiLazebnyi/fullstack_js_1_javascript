// Создать пустой объект и наполнить его данными:
// 1. Добавить свойство name и записать в него значение ‘Alex’
// 2. Добавить свойство lastName и записать в него значение ‘Smith’
// 3. Присвоить значение ‘Bob’ в свойство name
// 4. Удалить оба свойства

let someObject = {};

someObject.name     = 'Alex';
someObject.lastName = 'Smith';
console.log(someObject);

someObject.name     = 'Bob';
console.log(someObject);

delete someObject.name;
delete someObject.lastName;

console.log(someObject);