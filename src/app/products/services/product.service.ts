import {Injectable} from "@angular/core";
import {MOCK_PRODUCTS} from "./mock-products";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {return MOCK_PRODUCTS}
}
