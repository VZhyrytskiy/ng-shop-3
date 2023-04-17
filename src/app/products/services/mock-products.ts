import { ProductModel } from '../models/product.model';
import { ProductCategory } from '../products.type';

export const MOCK_PRODUCTS: ProductModel[] = [
  new ProductModel(
    '1',
    'Steak',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.',
    10,
    ProductCategory.MEAT,
    true
  ),
  new ProductModel(
    '2',
    'Apples',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, sunt.',
    10,
    ProductCategory.VEGAN,
    true
  ),
  new ProductModel(
    '3',
    'Bread',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    10,
    ProductCategory.STANDARD,
    false
  ),
  new ProductModel('4', 'Hot buns', 'Lorem ipsum dolor sit', 10, ProductCategory.STANDARD, true),
];
