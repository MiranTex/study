interface Builder{
    setWheels(wheels: number): Builder;
    setColor(color: string): Builder;
    setModel(model: string): Builder;
    setBrand(brand: string): Builder;
    setEngine(engine: string): Builder;
    setTransmission(transmission: string): Builder;
    setFuel(fuel: string): Builder;
    setPrice(price: number): Builder;
}

export class Car {
    private wheels: number | null;
    private color: string | null;
    private model: string | null;
    private brand: string | null;
    private engine: string | null;
    private transmission: string | null;
    private fuel: string | null;
    private price: number | null;


    constructor(wheels: number, color: string, model: string, brand: string, engine: string, transmission: string, fuel: string, price: number) {
        this.wheels = wheels;
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.engine = engine;
        this.transmission = transmission;
        this.fuel = fuel;
        this.price = price;
    }

    public resume() {
        //sperator
        console.log("================Car====================");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Wheels: ${this.wheels}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engine: ${this.engine}`);
        console.log(`Transmission: ${this.transmission}`);
        console.log(`Fuel: ${this.fuel}`);
        console.log(`Price: ${this.price}`);
        console.log("====================================");
    }
}

export class CarSchemma {
    private wheels: number | null;
    private color: string | null;
    private model: string | null;
    private brand: string | null;
    private engine: string | null;
    private transmission: string | null;
    private fuel: string | null;
    private price: number | null;

    constructor(wheels: number, color: string, model: string, brand: string, engine: string, transmission: string, fuel: string, price: number) {
        this.wheels = wheels;
        this.color = color;
        this.model = model;
        this.brand = brand;
        this.engine = engine;
        this.transmission = transmission;
        this.fuel = fuel;
        this.price = price;
    }

    public craft(){
        //sperator
        console.log("==========CarSchema==========");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Wheels: ${this.wheels}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engine: ${this.engine}`);
        console.log(`Transmission: ${this.transmission}`);
        console.log(`Fuel: ${this.fuel}`);
        console.log(`Price: ${this.price}`);
        console.log("====================================");
    }
}


export class CarBuilder implements Builder {
    private wheels: number | null = null;
    private color: string | null = null;
    private model: string | null = null;
    private brand: string | null = null;
    private engine: string | null = null;
    private transmission: string | null = null;
    private fuel: string | null = null;
    private price: number | null = null;

    constructor() {
    }

    setWheels(wheels: number) : CarBuilder {
        this.wheels = wheels;
        return this;
    }

    setColor(color: string) : CarBuilder {
        this.color = color;
        return this;
    }

    setModel(model: string) : CarBuilder {
        this.model = model;
        return this;
    }

    setBrand(brand: string) : CarBuilder {
        this.brand = brand;
        return this;
    }

    setEngine(engine: string) : CarBuilder {
        this.engine = engine;
        return this;
    }

    setTransmission(transmission: string) : CarBuilder {
        this.transmission = transmission;
        return this;
    }

    setFuel(fuel: string) : CarBuilder {
        this.fuel = fuel;
        return this;
    }

    setPrice(price: number) : CarBuilder {
        this.price = price;
        return this;
    }

    build() : Car {
        return new Car(this.wheels!, this.color!, this.model!, this.brand!, this.engine!, this.transmission!, this.fuel!, this.price!);
    }
}

export class CarSchemaBuilder implements Builder{
    private wheels: number | null = null;
    private color: string | null = null;
    private model: string | null = null;
    private brand: string | null = null;
    private engine: string | null = null;
    private transmission: string | null = null;
    private fuel: string | null = null;
    private price: number | null = null;

    constructor() {
    }

    setWheels(wheels: number) : CarSchemaBuilder {
        this.wheels = wheels;
        return this;
    }

    setColor(color: string) : CarSchemaBuilder {
        this.color = color;
        return this;
    }

    setModel(model: string) : CarSchemaBuilder {
        this.model = model;
        return this;
    }

    setBrand(brand: string) : CarSchemaBuilder {
        this.brand = brand;
        return this;
    }

    setEngine(engine: string) : CarSchemaBuilder {
        this.engine = engine;
        return this;
    }   

    setTransmission(transmission: string) : CarSchemaBuilder
    {
        this.transmission = transmission;
        return this;
    }

    setFuel(fuel: string) : CarSchemaBuilder {
        this.fuel = fuel;
        return this;
    }

    setPrice(price: number) : CarSchemaBuilder {
        this.price = price;
        return this;
    }

    build() : CarSchemma {
        return new CarSchemma(this.wheels!, this.color!, this.model!, this.brand!, this.engine!, this.transmission!, this.fuel!, this.price!);
    }
}


export class Director{

    private builder: Builder;

    constructor(builder: Builder){
        this.builder = builder;
    }

    public constructSportCar(builder : CarBuilder) : void{
        builder.setWheels(4);
        builder.setColor("Red");
        builder.setModel("Sport");
        builder.setBrand("Ferrari");
        builder.setEngine("V8");
        builder.setTransmission("Automatic");
        builder.setFuel("Gasoline");
        builder.setPrice(100000);
    }

    public constructEconomicCar(builder:Builder ) : void{
        builder.setWheels(4);
        builder.setColor("White");
        builder.setModel("Economic");
        builder.setBrand("Fiat");
        builder.setEngine("V4");
        builder.setTransmission("Manual");
        builder.setFuel("Gasoline");
        builder.setPrice(15000);
    }

}