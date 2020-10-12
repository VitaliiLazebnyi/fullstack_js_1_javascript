import { shipsMapping,
    AbstractShip,
    YachtShip,
    MotorShip } from './Ships.mjs';

class AbstractDockyard {
    #availableColors = ['white', 'red'];

    constructor() {
        if (this.type === 'Abstract') {
            throw new Error("AbstractDockyard can't be build.");
        }
    };

    paint(ship, newColor){
        if (!(ship instanceof AbstractShip)){
            throw new Error('Invalid ship is being passed.');
        }

        if (!this.#availableColors.includes(newColor)){
            throw new Error('Invalid color is expected.');
        }

        ship.color = newColor;
    }

    buildShip(characteristics = {}){
        let shipType  = `${this.type}Ship`;
        let shipClass = shipsMapping[shipType];
        return new shipClass(characteristics);
    };

    fixShip(ship){
        this.checkShipType(ship);
    };

    exchangeShip(ship){
        this.checkShipType(ship);
        return this.buildShip(ship.characteristics);
    };

    checkShipType(ship){
        if (ship.type === this.type){
            throw new Error("Invalid ship type.");
        }
    };

    get type(){
        return this.constructor.name.match(/^[A-Z][a-z]+/)[0];
    };
}

class MotorDockyard extends AbstractDockyard {
    constructor() {
        super();
    };
}

class YachtDockyard extends AbstractDockyard {
    constructor() {
        super();
    };
}

export { MotorDockyard, YachtDockyard };
