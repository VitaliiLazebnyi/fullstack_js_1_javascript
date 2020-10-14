import { Board } from './board.mjs';

class Game {
    #board = null;
    #state = null;
    #turn  = 'white';

    constructor() {

    };

    #setState(state) {
        if (!['progress',
            'white won',
            'black won',
            'pat',
            'give up proposition'].includes(state)){
            throw new Error('Invalid state');
        }

        this.#state = state;
    }

    start() {
        this.#board = new Board();
        this.#setState('progress');
    };

    movePiece(from, to) {
        if (this.#turn !== this.#board.color(from)){
            throw new Error('Wrong turn.');
        }

        this.#board.move(from, to);
        this.#changeTurn();
    };

    #changeTurn(){
        if (this.#turn === 'white'){
            this.#turn = 'black';
        } else {
            this.#turn = 'white';
        }
    }

    proposeToGiveUpTo(color){
        this.#setState('give up proposition');
    }

    acceptGiveUp(){
        this.#setState(`${this.#turn} won`);
    }

    refuseGiveUp(){
        this.#setState(`progress`);
    }

    get showField(){
        return this.#board.userFriendlyField;
    }

    get showRemoved(){
        return this.#board.removed;
    }

    get showHistory(){
        return this.#board.showHistory;
    }
}

export { Game };
