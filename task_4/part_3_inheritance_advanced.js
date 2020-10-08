// Организовать такую цепочку прототипов, в которой свойства
// и методы оптимально распределены по объектам:
//
// Есть следующее расширение объектов:
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
//
// Есть следующий объект, в котором свойства лежат кучей:
//     const john = {
//         name: "John",
//         lastName: "Smith",
//         position: "Senior engineer",
//         startDate: "10.10.1990",
//         endDate: "10.10.2000",
//         baseSalary: "10000",
//         salaryCurrency: "$",
//         location: "Russia",
//         department: "IT",
//         phoneNumber: "+1234567890",
//         eat: function() {},
//         sleep: function() {},
//         callFriend: function() {},
//         writeReport: function() {},
//         organizeMeeting: function () {},
//         retire: function () {},
//         startVacation: function () {}
//     };
//


class Person {
    // name:        "John",
    // lastName:    "Smith",
    // location:    "Russia",
    // eat:          function() {},
    // sleep:        function() {},
    // phoneNumber: "+1234567890",

    // callFriend: function() {},
    constructor(obj) {
        this.name        = obj['name']        || 'John';
        this.lastName    = obj['lastName']    || 'Smith';
        this.location    = obj['location']    || 'USA';
        this.phoneNumber = obj['phoneNumber'] || '+14842634604';
    };

    callFriend() {

    };

    eat() {

    };

    sleep() {

    };
}

class Employee extends Person {
    // position: "Senior engineer",
    // startDate: "10.10.1990",
    // baseSalary: "10000",
    // salaryCurrency: "$",
    // department: "IT",
    constructor(obj) {
        super(obj);

        this.position       = obj['position']
            || 'Senior engineer';
        this.startDate      = obj['startDate']
            || new Date().getFullYear();
        this.baseSalary     = obj['baseSalary']
            || 0;
        this.salaryCurrency = obj['salaryCurrency']
            || '$';
        this.department     = obj['department'] || 'IT';
    }
}


class ExEmployee extends Employee {
    // endDate: "10.10.2000"
    constructor(obj) {
        super(obj);

        this.endDate = obj['endDate'] || new Date().getFullYear();
    }
}

class CurrentEmployee extends Employee {
    // writeReport: function() {},
    // organizeMeeting: function () {},
    // retire: function () {},
    // startVacation: function () {}
    constructor(obj) {
        super(obj);
    };

    writeReport(){

    };

    organizeMeeting(){

    };

    retire(){

    };

    startVacation(){

    };
}

test_subject = new CurrentEmployee({});
console.log(test_subject);
