import { Game } from './game.mjs';

let game = new Game;

// 1. g2-g4 e7-e5
// 2. f2-f3 Фd8-h4×

game.start();
game.movePiece('g2', 'g4'); // white
game.movePiece('e7', 'e5'); // black
game.movePiece('f2', 'f3'); // white
game.movePiece('d8', 'd4'); // black
game.proposeToGiveUpTo('white');
game.acceptGiveUp();


console.log(game.showField);
console.log(game.showRemoved);
