// src/models/Cart.ts
import { type Product } from "./ProductModel";

export interface Cart {
  id: number;
  userId: number;
  products: Product[];
}
