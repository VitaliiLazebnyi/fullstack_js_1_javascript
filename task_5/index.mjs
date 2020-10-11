import { Game } from './game.mjs';

let game = new Game;
game.start();
game.movePiece('a2', 'a4');

console.log(game.showField);
