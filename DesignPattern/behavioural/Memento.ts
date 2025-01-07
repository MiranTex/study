export interface Memento{
    getName(): string;
    getDate(): Date;

}

export class ImageEditor{
    constructor(public path: string, public format: string){
        this.path = path;
        this.format = format;

    }


    public convertToFormat(format: string){
        this.format = format;
        this.path = this.path.split('.').slice(0, -1).join('.') + '.' + format;
    }

    public save(): Readonly<Memento>{
        const date = new Date();

        return new ConcreteMemento(date.toISOString(), date, this.path, this.format);
    }

    restore(memento: Memento){
        const concreteMemento = memento as ConcreteMemento;

        this.path = concreteMemento.getFilePath();
        this.format = concreteMemento.getFileFormat();
    }

}


export class ConcreteMemento implements Memento {

    constructor(
        private name: string, 
        private date: Date, 
        private filePath: string, 
        private fileFormat: string
    ){}

    getName(): string {
        return this.name;
    }

    getDate(): Date {
        return this.date;
    }

    getFilePath(): string {
        return this.filePath;
    }

    getFileFormat(): string {
        return this.fileFormat;
    }

}


export class ImageEditorBackup {
    private mementos: Memento[] = [];

    constructor(private imageEditor: ImageEditor){}

    public backup(){
        console.log('Backup: processing...');
        this.mementos.push(this.imageEditor.save());
    }

    public undo(){
        const memento = this.mementos.pop();

        if(!memento) return;

        this.imageEditor.restore(memento);
    }
}