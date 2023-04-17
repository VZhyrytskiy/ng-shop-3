import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  cartItems: ProductModel[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  trackByProducts(index: number, product: ProductModel) {
    return product.id;
  }
}
