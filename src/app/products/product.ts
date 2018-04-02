export interface IProduct {
    productId: number;
    description: string;
}

export interface AppState
{
    products: Product[];
}

export class Product implements IProduct {
    constructor (public productId: number, public description: string){}
}