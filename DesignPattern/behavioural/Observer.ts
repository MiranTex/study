interface EventListener {
    update(): void;
}

export class Store {

    private notificationService: NotificationService;

    constructor() {

        this.notificationService = new NotificationService();
    }

    public getService(): NotificationService {

        return this.notificationService;
    }
}

export class NotificationService {

    private customers: EventListener[];

    constructor(){
        this.customers = [];
    }

    public subscribe(customer: EventListener): void {
        this.customers.push(customer);
    }

    public unsubscribe(customer: EventListener): void {
        const index = this.customers.indexOf(customer);
        this.customers.splice(index, 1);
    }

    public notify(): void {
        this.customers.forEach(customer => customer.update());
    }
}

export class EmailMsgListener implements EventListener {

    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    public update() :void{
        console.log(`Email sent to ${this.email}`);
    }
}


export class MobileAppListener implements EventListener {

    private mobile: string;

    constructor(mobile: string) {
        this.mobile = mobile;
    }

    public update() :void{
        console.log(`Mobile notification sent to ${this.mobile}`);
    }
}