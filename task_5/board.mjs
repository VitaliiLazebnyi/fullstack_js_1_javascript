import { Pawn, Bishop, Knight, Rook, Queen, King } from './pieces.mjs';

class Board {
    #field   = null;
    #history = [];

    #fillLastRow(color) {
        let rook   = new Rook(color);
        let knight = new Knight(color);
        let bishop = new Bishop(color);

        return [
            rook,
            knight,
            bishop,
            new Queen(color),
            new King(color),
            bishop,
            knight,
            rook,
        ];
    }

    #fillPawnRow(color) {
        let pawn = new Pawn(color);
        return new Array(8).fill(pawn);
    }

    #fillEmptyRow() {
        return new Array(8).fill(null);
    }

    #initializeField() {
        this.#field = [
            this.#fillLastRow('black'),
            this.#fillPawnRow('black'),
            this.#fillEmptyRow(),
            this.#fillEmptyRow(),
            this.#fillEmptyRow(),
            this.#fillEmptyRow(),
            this.#fillPawnRow('white'),
            this.#fillLastRow('white'),
        ]
    };

    constructor() {
        this.#initializeField();
    };

    #convertCoordinatesToInt(coordinate){
        let x = {a: 0, b: 1, c: 2, d: 3,
            e: 4, f: 5, g: 6, h: 7}[coordinate[0]];
        let y = 8 - parseInt(coordinate[1]);

        return [x, y];
    }

    #convertCoodrdinateToUser(x, y){
        let map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let coordinate = `${map[x]}${y+1}`;

        return coordinate;
    }

    #validateMoves(from, to){
        let piece = this.#field[from[1]][from[0]];

        if (!piece){
            throw new Error('nothing to move');
        }

        let possibleMoves = piece.generateMoves(from[1],from[2]);

        if (possibleMoves.map(()))

        console.log(possibleMoves);
    }

    move(from, to){
        let [from_x, from_y] = this.#convertCoordinatesToInt(from);
        let [to_x,   to_y]   = this.#convertCoordinatesToInt(to);

        this.#validateMoves([from_x, from_y], [to_x, to_y]);

        this.#field[to_x][to_y]     = this.#field[from_x][from_y];
        this.#field[from_x][from_y] = null;
        this.#history.push(`${from}->${to}`);
    }

}

export { Board };
