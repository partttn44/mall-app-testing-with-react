// src/controllers/cartController.ts
import type { Product } from "../models/ProductModel";
import { getAllCart, getAllCategory } from "../services/cartService";

// controller function ที่ห่อ service อีกที
export async function getAllProducts(): Promise<Product[]> {
  try {
    const products = await getAllCart();
    // 👉 ถ้ามี logic เพิ่ม เช่น filter, map, validate ใส่ตรงนี้
    return products;
  } catch (error) {
    console.error("Error in cartController:", error);
    throw error;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const categories = await getAllCategory();
    // 👉 ถ้ามี logic เพิ่ม เช่น filter, map, validate ใส่ตรงนี้
    return categories;
  } catch (error) {
    console.error("Error in cartController:", error);
    throw error;
  }
}
