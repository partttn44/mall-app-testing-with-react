// src/api.ts
import type { Product } from "../models/ProductModel";

export const getAllCart = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: Product[] = await response.json();
  return data;
};

export const getById = async (id: number): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: Product = await response.json();
  return data;
};

export const getAllCategory = async (): Promise<string[]> => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: Product[] = await response.json();

  // ใช้ Set เพื่อไม่ให้ซ้ำ
  const categorySet = new Set<string>();

  for (let index = 0; index < data.length; index++) {
    categorySet.add(data[index].category);
  }

  // แปลง Set เป็น Array
  const category = Array.from(categorySet);

  return category;
};
