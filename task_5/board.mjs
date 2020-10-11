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

        console.log(this.#field);
    };

    constructor() {
        this.#initializeField();
    };

    #convertCoordinatesToInt(coordinate){
        let x = {a: 0, b: 1, c: 2, d: 3,
            e: 4, f: 5, g: 6, h: 7}[coordinate[0]];
        let y = 8 - parseInt(coordinate[1]);

        return [y, x];
    }

    #convertCoodrdinateToUser(x, y){
        let map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let coordinate = `${map[y]}${x+1}`;

        return coordinate;
    }

    #validateMoves(from, to){
        let [y, x] = from;
        let piece  = this.#field[y][x];

        if (!piece){
            throw new Error('nothing to move');
        }

        let possibleMoves = piece.generateMoves([y, x], this.#field);
        console.log(possibleMoves);

    }

    move(from, to){
        let [from_y, from_x] = this.#convertCoordinatesToInt(from);
        let [to_y,   to_x]   = this.#convertCoordinatesToInt(to);

        console.log([from_y, from_x]);
        this.#validateMoves([from_y, from_x], [to_y, to_x]);

        this.#field[to_y][to_x]     = this.#field[from_y][from_x];
        this.#field[from_y][from_x] = null;
        this.#history.push(`${from}->${to}`);
    }

}

export { Board };
