type request = number;

export abstract class Handler {

    private next: Handler|null = null;

    setNextHandler(handler: Handler): Handler {
        this.next = handler;
        return handler;
    }

    abstract handle(request: request): boolean

    handleNext(request: request): boolean{
        return this.next?.handle(request) || true;
    }

}


export class GreaterThan1 extends Handler {
    handle(request: request): boolean {
        if (request > 1) {
            console.log('GreaterThan1');
            return this.handleNext(request);
        } else {
            return false;
        }
    }
}

export class GreaterThan2 extends Handler {
    handle(request: request): boolean {
        if (request > 2) {
            console.log('GreaterThan2');
            return this.handleNext(request);
        } else {
            return true;
        }
    }
}

export class GreaterThan3 extends Handler {
    handle(request: request): boolean {
        if (request > 3) {
            console.log('GreaterThan3');
            return this.handleNext(request);
        } else {
            return false;
        }
    }
}

export class ShouldBeGreaterThanThree {
    private handler: Handler;

    constructor(handler: Handler) {
        this.handler = handler;
    }

    public handleRequest(request: request): boolean {
        return this.handler.handle(request);
    }
}