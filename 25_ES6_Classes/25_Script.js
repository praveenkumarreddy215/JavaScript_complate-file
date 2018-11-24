class Vehicle{
    constructor(color,model){
        this._color = color;
        this._model = model;
    }
}

// Class
class Car extends Vehicle{

    // Constructor
    constructor(color,model,engineCapacity,mileage,hasAirBags){
        super(color,model);
        this._engineCapacity = engineCapacity;
        this._mileage = mileage;
        this._hasAirBags = hasAirBags;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get engineCapacity() {
        return this._engineCapacity;
    }

    set engineCapacity(value) {
        this._engineCapacity = value;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(value) {
        this._mileage = value;
    }

    get hasAirBags() {
        return this._hasAirBags;
    }

    set hasAirBags(value) {
        this._hasAirBags = value;
    }

    specification(){
        let spec = `Color : ${this.color}
                    Model : ${this.model}
                    Engine Capacity : ${this.engineCapacity}
                    Mileage : ${this.mileage}
                    Has Air Bags ? : ${this.hasAirBags}`;
        return spec;
    }
}

// Objects Creation
let car1 = new Car('White','BMW','4000CC','7kmpl',true);
let carSpec = car1.specification();
console.log(carSpec);

let car2 = new Car('Black','Audi','3500CC','10kmpl',true);
carSpec = car2.specification();
console.log(carSpec);