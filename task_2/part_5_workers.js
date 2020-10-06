//
// Есть массив сотрудников компании
// const employees = [
//     {
//         firstName: ‘Alex’,
// lastName: ‘Smith’,
// age: 54,
//     salary: 10000,
//     position: ‘Architect’
// },
// {
//     firstName: ‘Gustav’,
//     lastName: ‘Andersen’,
//     age: 31,
//         salary: 5000,
//     position: ‘Software engineer’
// },
// {
//     firstName: ‘Liz’,
//     lastName: ‘Taylor’,
//     age: 20,
//         salary: 7000,
//     position: ‘Manager’
// }
// ]
//
// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [
    {
        firstName: 'Alex',
        lastName:  'Smith',
        age:        54,
        salary:     10000,
        position:  'Architect'
    },
    {
        firstName:  'Gustav',
        lastName:   'Andersen',
        age:         31,
        salary:      5000,
        position:   'Software engineer'
    },
    {
        firstName:  'Liz',
        lastName:   'Taylor',
        age:         20,
        salary:      7000,
        position:   'Manager'
    }
]


function averageSalary(workers) {
    let total_salary = workers
        .map(worker => worker.salary)
        .reduce((a, b) => a + b, 0)

    return (total_salary / workers.length) || 0;
}

console.log(`Average salary is ${averageSalary(employees)}`);

function sortWorkers(workers) {
    return workers.sort((w1, w2) => w2.salary - w1.salary);
}

console.log(sortWorkers(employees));

function filterWorkersBySalaryAndAge(workers) {
    return workers.filter(
        worker => worker.salary > 4500 && worker.age > 25
    );
}

console.log(filterWorkersBySalaryAndAge(employees));