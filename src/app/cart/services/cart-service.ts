import { Injectable } from '@angular/core';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ProductModel[] = [];

  addItemToCart(value: ProductModel) {
    this.cartItems = [...this.cartItems, value];
  }

  removeItemFromCart(productId: string) {
    this.cartItems = this.cartItems.filter(({ id }) => id !== productId);
    // если вы ничего не возвращаете, можно возвращать this
    // тогда методы можно будет вызывать в цепочке
    // obj.removeItemFromCart(...).getCartItems()
  }

  getCartItems() {
    return this.cartItems;
  }
}
