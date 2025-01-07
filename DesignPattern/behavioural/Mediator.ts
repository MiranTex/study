export type SellerProduct = {

    id: string;
    name: string;
    price: number;

}

interface buyer {
    buyProduct(id: string): SellerProduct | void;
}

export class Seller implements buyer {
    private products: SellerProduct[] = [];
    private mediator: Mediator | null = null;

    showProducts(): void {
        this.products.forEach(product => console.log(`Product: ${product.name}, Price: ${product.price}`));
    }

    addProduct(...product: SellerProduct[]): void {
        product.forEach(p => this.products.push(p));
    }

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    sell(id: string): SellerProduct | void {
        const productIndex = this.products.findIndex(product => product.id === id);

        if(productIndex === -1) return;

        const product = this.products.splice(productIndex, 1);

        return product[0];
    }

    buyProduct(id: string): SellerProduct | void {
        if(!this.mediator) return;

        return this.mediator.buyProduct(id);
    }
}

export class Mediator {
    private sellers: Seller[] = [];

    addSeller(...sellers: Seller[]): void {
        sellers.forEach(seller => {
            seller.setMediator(this);
            this.sellers.push(seller);
        });
    }

    buyProduct(id: string): SellerProduct | void {
        this.sellers.forEach(seller => {
            const product = seller.sell(id);

            if(product) {
                console.log(`Product: ${product.name}, Price: ${product.price}`);
                return;
            }
        });
    }


    showProducts(): void {
        this.sellers.forEach(seller => seller.showProducts());
    }                                                                                                                            
}