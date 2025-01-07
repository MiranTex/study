// Command pattern
interface Command {
    execute(): void;
    undo(): void;
} 

//concrete command
export class LightPowerCommand implements Command {

    constructor(private readonly light: SmartHouseLight) {}

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

export class IntensityCommand implements Command {
    constructor(private readonly light: SmartHouseLight) {}

    execute(): void {
        const intensity = this.light.increaseIntensity();
        console.log(`The intensity of the light ${this.light.name} is ${intensity}`);
        
    }

    undo(): void {
        const intensity = this.light.decreaseIntensity();
        console.log(`The intensity of the light ${this.light.name} is ${intensity}`);
    }
}

//receiver
export class SmartHouseLight {
    private isOn: boolean = false;
    private intensity: number = 50;

    constructor(public name: string) {}

    getPowerStatus(): string {
        return this.isOn ? 'ON' : 'OFF';
    }

    on(): boolean{
        this.isOn = true;
        console.log(`The light ${this.name} is ${this.getPowerStatus()}`);
        return this.isOn;
    }

    off(): boolean {
        this.isOn = false;
        console.log(`The light ${this.name} is ${this.getPowerStatus()}`);
        return this.isOn;
    }

    increaseIntensity(): number {

        if (this.intensity >= 100) {
            return this.intensity;
        }

        this.intensity += 1;
        return this.intensity;
    }

    decreaseIntensity(): number {

        if (this.intensity <= 0) {
            return this.intensity;
        }

        this.intensity -= 1;
        return this.intensity;
    }
}


//invoker
export class SmartHouseApp{
    private commands: { [key: string]: Command } = {};

    addCommand(name: string, command: Command): void {
        this.commands[name] = command;
    }

    executeCommand(name: string): void {
        this.commands[name].execute();
    }

    undoCommand(name: string): void {
        this.commands[name].undo();
    }
}