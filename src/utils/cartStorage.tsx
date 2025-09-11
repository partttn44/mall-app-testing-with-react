import type { Product } from "../models/ProductModel";

const CART_KEY = "cartItems";

export function getCart(): Product[] {
  const data = localStorage.getItem(CART_KEY);
  return data ? (JSON.parse(data) as Product[]) : [];
}

export function addToCart(product: Product) {
  const current = getCart();
  localStorage.setItem("cartItems", JSON.stringify([...current, product]));
}

export function removeFromCart(id: number) {
  const current = getCart().filter((p) => p.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(current));
}

export function removeAllFromCart() {
  localStorage.removeItem(CART_KEY);
}
