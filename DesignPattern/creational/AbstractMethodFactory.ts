interface Gpu {
    assemble(): void;
}

interface Monitor {
    assemble(): void;
}

//not useful in this case beacause a sigle factory cant create multiple products otherwise we have to pass the type of product to create and that would create again
//the same problem as the simple factory, the open close principle would be violated
interface Component {
    assemble(): void;
}


export class MsiGpu implements Gpu {
    public assemble(): void {
        console.log("Assembling MSI GPU");
    }
}


export class AsusGpu implements Gpu {
    public assemble(): void {
        console.log("Assembling Asus GPU");
    }
}

export class MsiMonitor implements Monitor {
    public assemble(): void {
        console.log("Assembling MSI Monitor");
    }
}

export class AsusMonitor implements Monitor {
    public assemble(): void {
        console.log("Assembling Asus Monitor");
    }
}


abstract class Company {

    public abstract createGpu(): Gpu | null;
    public abstract createMonitor(): Monitor | null;
} 


export class MsiManufacturer extends Company {

    public createGpu(): Gpu | null {
        return new MsiGpu();
    }

    public createMonitor(): Monitor | null {
        return new MsiMonitor();
    }
}


export class AsusManufacturer extends Company {
    
        public createGpu(): Gpu | null {
            return new AsusGpu();
        }
    
        public createMonitor(): Monitor | null {
            return new AsusMonitor();
        }
}


