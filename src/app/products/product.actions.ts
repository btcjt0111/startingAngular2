import { IProduct } from './product';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS'
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL'

export class LoadProductsAction
{
    readonly type = LOAD_PRODUCTS;
    constructor() {}
}

export class LoadProductsSuccessAction
{
    readonly type = LOAD_PRODUCTS_SUCCESS;
    constructor(public payload: IProduct[]) {}
}

export class LoadProductsFailAction
{
    readonly type = LOAD_PRODUCTS_FAIL;
    constructor(public payload: IProduct[]) {}
}

export type Action = LoadProductsAction | LoadProductsSuccessAction | LoadProductsFailAction