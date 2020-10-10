import { Board } from './board.mjs';

class Game {
    #board = null;
    #state = null;

    constructor() {

    };

    #setState(state) {
        if (!['progress', 'white won', 'black won', 'pat'].includes(state)){
            throw new Error('Invalid state');
        }

        this.#state = state;
    }

    start() {
        this.#board = new Board();
        this.#setState('progress');
    };

    movePiece(from, to) {
        this.#board.move(from, to);
    }
}

export { Game };
