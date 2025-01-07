interface Prototype {
    clone(): Car;
}


abstract class Vehicle{


    constructor(public brand:string, public model:string, public color:string){
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    abstract clone(): Vehicle;
}

export class Gps{
    constructor(public brand: string, public model: string){
        this.brand = brand;
        this.model = model;
    }
}

export class Car extends Vehicle {


    constructor(brand: string, model:string, color: string, public topSpeed: number, public gps?: Gps){ 
        super(brand, model, color);
        this.topSpeed = topSpeed;
        this.gps = gps;
    }

    setTopSpeed(topSpeed: number){
        this.topSpeed = topSpeed;
    }

    public clone(): Car {
        return new Car(this.brand, this.model, this.color, this.topSpeed, new Gps(this.gps?.brand!, this.gps?.model!));
    }
}

export class Bus extends Vehicle {


    constructor(brand: string, model: string, color: string, public capacity: number){
        super(brand, model, color);
        this.capacity = capacity;
    }

    public clone(): Bus {
        return new Bus(this.brand, this.model, this.color, this.capacity);
    }
}