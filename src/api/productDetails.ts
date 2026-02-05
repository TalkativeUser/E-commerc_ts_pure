import { Product } from "../types";
const BASE_URL = "https://api.escuelajs.co/api/v1";


export async function getProductDetails(id:number): Promise<Product> {

const res = await fetch(`${BASE_URL}/products/${id}`);

  if (!res.ok) {
    throw new Error("Product not found");
  }

  return res.json();
}