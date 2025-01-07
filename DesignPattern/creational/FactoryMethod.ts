interface Burger {

    pruductId: number | undefined;
    addOns: string | undefined;

    prepare(): void;
}


class BeefBurger implements Burger {
    public pruductId:number = 1;
    public addOns : string = "Beef Burger";

    private angus : boolean | undefined;

    public prepare() : void {
        console.log("Preparing Beef Burger");
    }
}


class ChickenBurger implements Burger {
    public pruductId:number = 2;
    public addOns : string = "Chicken Burger";

    private combo : boolean | undefined;

    public prepare() : void {
        console.log("Preparing Chicken Burger");
    }
}

//Replaceable because it violet the open close principle
class SimpleBurgerFactory{
    public createBurger(type:string) : Burger | null {
        let burger : Burger | null = null;
        if(type === "beef"){
            burger = new BeefBurger();
        } else if(type === "chicken"){
            burger = new ChickenBurger();
        }
        return burger;
    }
}

//this is the factory method pattern, some abstrations are created to make it more extensible
export abstract class Restaurant {
    public orderBurger() : Burger | null {
        let burger = this.createBurger();

        return burger;
    }

    public abstract createBurger() : Burger | null;
}

export class BeefBurgerRestaurant extends Restaurant {

    public createBurger() : Burger | null {
        
        return new BeefBurger();
    }
}

export class ChickenBurgerRestaurant extends Restaurant {

    public createBurger() : Burger | null {
        return new ChickenBurger();
    }
}


