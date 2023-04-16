import { Product } from '../models/product.model';
import { ProductCategory } from '../products.type';

export const MOCK_PRODUCTS: Product[] = [
  new Product(
    '1',
    'Steak',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.',
    10,
    ProductCategory.MEAT,
    true
  ),
  new Product(
    '1',
    'Apples',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.',
    10,
    ProductCategory.VEGAN,
    true
  ),
  new Product(
    '1',
    'Bread',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    10,
    ProductCategory.STANDARD,
    false
  ),
  new Product('1', 'Hot buns', 'Lorem ipsum dolor sit', 10, ProductCategory.STANDARD, true),
];
