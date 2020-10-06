// Реализовать функцию, которая принимает текст,
// и возвращает массив объектов со структурой
// { word: 'smth', length: 1, isCapitalized: false }

const text = 'hello, World! How are you?';

function analyze_word(word) {
    return {
        word: word,
        length: word.length,
        isCapitalized: word[0] == word[0].toUpperCase()
    }
}

function analyze_text(text) {
    return text.match(/\w+/g).map(analyze_word);
}

console.log(analyze_text(text));