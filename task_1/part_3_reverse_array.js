// Написать функцию для реверсии слова не используя встроенные методы

function revert(letters){
  return letters.split('').reverse().join('');
}

console.log(revert('surya namaskar'));
// output is 'raksaman ayrus'