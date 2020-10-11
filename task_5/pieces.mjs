const bishopsMoves = (x, y) => {
    let moves = [];
    for (let i = 1; i <= 8; i++) {
        moves.push([x+1, y]);
        moves.push([x+1, y+1]);
        moves.push([x-1, y]);
        moves.push([x-1, y-1]);
    }

    return moves;
};

const rooksMoves = (x, y) => {
    let moves = [];
    for (let i = 1; i <= 8; i++) {
        moves.push([x-i, y]);
        moves.push([x+i, y]);
        moves.push([x,   y-i]);
        moves.push([x,   y+i]);
    }
    return moves;
};

class AbstractPiece {
    _color = null;
    #AVAILABLE_COLORS = ['white', 'black']

    #setColor(color) {
        if (this.#AVAILABLE_COLORS.includes(color)) {
            this._color = color;
            return;
        }

        throw new Error('Invalid color');
    }

    get color(){
        return this._color;
    }

    constructor(color) {
        this.#setColor(color);
    };
}

class Pawn extends AbstractPiece {
    generateMoves(from, board) {
        let [y, x]        = from;
        let ownColor      = board[from[0]][from[1]].color;
        let possibleMoves = [];
        let direction     = 1;

        if (ownColor === 'white'){
            direction = -1;
        } else {
            direction = 1;
        }

        if (!board[y+direction][x]){
            possibleMoves.push([y+direction, x]);
        }

        if (
            (ownColor === 'white' && y === 6) ||
            (ownColor === 'black' && y === 1)
        ){
            possibleMoves.push([y+direction*2, x]);
        }

        if (board[y+direction][x-1] &&
            board[y+direction][x-1].color !== ownColor){
            possibleMoves.push([y+direction, x-1]);
        }

        if (board[y+direction][x+1] &&
            board[y+direction][x+1].color !== ownColor){
            possibleMoves.push([y+direction, x+1]);
        }

        return possibleMoves;
    }
}

class Bishop extends AbstractPiece {
    get generateMoves() {
        return bishopsMoves;
    }
}

class Knight extends AbstractPiece {
    get generateMoves() {
        return (x, y) => {
            return [
                [x-2, y+1],
                [x-1, y+2],
                [x+1, y+2],
                [x+2, y+1],
                [x+2, y-1],
                [x+1, y-2],
                [x-1, y-2],
                [x-2, y-1]
            ];
        }
    };
}

class Rook extends AbstractPiece {
    get generateMoves() {
        return rooksMoves;
    };
}

class Queen extends AbstractPiece {
    get generateMoves() {
        return (x, y) => {
            return rooksMoves(x, y).concat(bishopsMoves(x, y));
        };
    };
}

class King extends AbstractPiece {
    get generateMoves() {
        return (x, y) => {
            return [
                [x+1, y],
                [x+1, y+1],
                [x,   y+1],
                [x-1, y+1],
                [x-1, y],
                [x-1, y-1],
                [x,   y-1],
                [x+1, y-1]
            ];
        };
    };
}

export { Pawn, Bishop, Knight, Rook, Queen, King };
