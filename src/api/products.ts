import type { Product } from "../types";
console.log('api/products started');

const BASE_URL = "https://api.escuelajs.co/api/v1";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
