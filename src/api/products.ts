import { BASE_URL_API } from "../services/index.js";
import type { IProduct } from "../types";

interface ResposneFace {

  products:IProduct[]
}

export async function getProducts(): Promise<ResposneFace> {
  const res = await fetch(`${BASE_URL_API}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
