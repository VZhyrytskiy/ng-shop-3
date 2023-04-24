import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductModel;

  // тут не надо внедрять сервис
  // организуйте аутпут
  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cartService.addItemToCart(this.product);
    console.log(`Added product: ID="${this.product.id}" name="${this.product.name}"`);
  }
}
