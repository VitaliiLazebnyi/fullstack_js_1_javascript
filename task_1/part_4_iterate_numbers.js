// Реализовать цикл перебирающий числа от одного до 20
// и выводящий каждое четное значение на экран,
// реализация должна использовать все 3 вида циклов
// (отдельная реализация на каждый цикл)

// 1. For loop

let to_screen = '';

for (let step_number = 1; step_number <= 20; step_number++) {
    if (!(step_number % 2)) {
        to_screen += `${step_number}, `
    }
}

console.log(to_screen);

// 2. While loop

let step_number = 1;
to_screen = '';

while (step_number <= 20) {
    if (!(step_number % 2)) {
        to_screen += `${step_number}, `
    }

    step_number++;
}

console.log(to_screen);

// 3. Do loop

step_number = 1;
to_screen = '';

do {
    if (!(step_number % 2)) {
        to_screen += `${step_number}, `
    }

    step_number++;
} while (step_number <= 20);

console.log(to_screen);

// 4. For in
step_number = 1;
to_screen = '';

for (step_number of Array(10).keys()) {
    to_screen += `${((step_number+1)*2)}, `;
}

console.log(to_screen);
