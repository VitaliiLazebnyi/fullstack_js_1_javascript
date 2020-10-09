class AbstractShip {
    #characteristics = {};

    constructor(characteristics = {}) {
        if (this.type === 'Abstract'){
            throw new Error("Abstract ship can't be build.");
        }

        this._color = characteristics['color'] || 'white';

        this.#characteristics =
            Object.assign(this.#characteristics, characteristics);
    };

    get color(){
        return this._color;
    };

    set color(c){
        this._color = c;
    };

    get characteristics(){
        return this.#characteristics;
    };

    get type(){
        return this.constructor.name.match(/^[a-z]+/);
    };
}

class MotorShip extends AbstractShip {
    constructor(characteristics = {}) {
        super(characteristics);

        let _power    =
            characteristics['power']    || 1;
        let _material =
            characteristics['material'] || 'steel';
    };

    get power()    { return _power };
    get material() { return _material };
}

class YachtShip extends AbstractShip {
    constructor(characteristics = {}) {
        super(characteristics);

        let _pillarsNumber =
            characteristics['pillarsNumber'] || 1;
        let _clothSurface  =
            characteristics['clothSurface']  || 1;
    };

    get pillarsNumber() { return _pillarsNumber };
    get clothSurface()  { return _clothSurface };
}

const shipsMapping = {
    'MotorShip': MotorShip,
    'YachtShip': YachtShip
};

export { shipsMapping, AbstractShip, YachtShip, MotorShip };
