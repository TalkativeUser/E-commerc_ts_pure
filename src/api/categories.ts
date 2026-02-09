import { BASE_URL_API } from "../services/index.js";
import type { Category } from "../types";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL_API}/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
