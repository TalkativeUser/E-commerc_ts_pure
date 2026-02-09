import { BASE_URL_API } from "../services/index.js";
import { Product } from "../types";
export async function getProductDetails(id:number): Promise<Product> {

const res = await fetch(`${BASE_URL_API}/products/${id}`);

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}