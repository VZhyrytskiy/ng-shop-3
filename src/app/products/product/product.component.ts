import {Component, Input} from '@angular/core';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;

  onAddToCart() {
    console.log(`Added product: ID="${this.product.id}" name="${this.product.name}"`)
  }
}
