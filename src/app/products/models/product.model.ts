import {ProductCategory} from "../products.type";

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean
  ) {
  }
}
