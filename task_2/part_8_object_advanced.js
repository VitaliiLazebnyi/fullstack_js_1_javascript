// Создать объект human со следующими возможностями:
//
// 1. При записи значения в свойство fullName имя и фамилия
// должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из
// объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же
// устанавливаться свойство age в зависимости от разницы года
// рождения и текущего года

// Date of birth - year only is expected.
const person = {
    firstName:   '',
    lastName:    '',
    birthday:  null,
    age:       null,

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        name = name.split(' ');
        this.firstName = name[0];
        this.lastName  = name[1];
    },

    set dateOfBirth(date) {
        this.age = new Number(
            (
                new Date().getTime() - date.getTime()) / 31536000000
        ).toFixed(0);

        this.birthday = date;
    },

    get dateOfBirth() {
        return this.birthday;
    }
};

person.fullName = 'Vinni Pukh';
person.dateOfBirth = new Date(1995, 0, 17);
console.log(person.dateOfBirth);
console.log(person.fullName);
console.log(person.age);