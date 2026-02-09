import { BASE_URL_API } from "../services/index.js";
import type { Product } from "../types";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL_API}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
