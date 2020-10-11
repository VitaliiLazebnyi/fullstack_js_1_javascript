const bishopsMoves = (from, board) => {
    let [from_y, from_x] = from;
    let ownColor         = board[from[0]][from[1]].color;
    let moves   = [];
    let vectors = [[1, 1], [-1, -1], [1, -1], [-1, 1]];
    let vector  = null;

    // for (const vector in vectors) {
    for (let vector_i = 0; vector_i < vectors.length; vector_i++){
        vector = vectors[vector_i];

        for (let i = 1; i < 8; i++){
            let to_y = from_y + i * vector[1];
            let to_x = from_x + i * vector[0];

            if (to_x < 0 || to_x > 7 || to_y < 0 || to_y > 7){
                break;
            }

            // if destination is empty
            if (!board[to_y][to_x]){
                moves.push([to_y, to_x]);
                continue;
            }

            // if destination is occupied by own piect
            if (ownColor === board[to_y][to_x].color) {
                break;
            }

            // if destination contains occupied by enemies pierce
            moves.push([to_y, to_x]);
            break;
        }
    }

    return moves;
}

const rooksMoves = (from, board) => {
    let moves = [];
    // to implement if necessary
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
    generateMoves(from, board) {
        let [from_x, from_y] = from;
        return [
            [from_y+1, from_x-2],
            [from_y+2, from_x-1],
            [from_y+2, from_x+1],
            [from_y+1, from_x+2],
            [from_y-1, from_x+2],
            [from_y-2, from_x+1],
            [from_y-2, from_x-1],
            [from_y-1, from_x-2]
        ];
    };
}

class Rook extends AbstractPiece {
    generateMoves(from, board) {
        return rooksMoves(from, board);
    };
}

class Queen extends AbstractPiece {
    generateMoves(from, board) {
        return bishopsMoves(from, board);
        // return rooksMoves(from, board).concat(bishopsMoves(from, board));
    };
}

class King extends AbstractPiece {
    generateMoves(from, board) {
        // to implement if necessary
    };
}

export { Pawn, Bishop, Knight, Rook, Queen, King };
