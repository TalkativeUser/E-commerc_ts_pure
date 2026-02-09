import { getProductDetails } from "../api/productDetails.js";
import { productDetails } from "../render/productDetails.js";
import '../components/drawer.js'
import '../components/header.js'
import '../components/categoriesBar.js'
import './core/stateManager.js'

import { Product } from "../types";

function getProductID() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? Number(id) : null;
}

const container = document.getElementById("product-details");

async function init() {
  if (!container) return;

  const id = getProductID();
  if (!id) {
    container.innerHTML = "Invalid product id";
    return;
  }
let isFaildProduct;
  try {
    console.log(" render / product dtails init method started");
    const product :Product = await getProductDetails(id);
    isFaildProduct=false;
    productDetails(product, container , isFaildProduct);

  } catch {
    isFaildProduct=true
    const product: Product = staticDetails;
    productDetails(product, container , isFaildProduct);
  }








}

const staticDetails = {
  id: 12,
  title: "fake or temprory product",
  slug: "fake or temprory product",
  price: 0,
  description:
    "not found this product",
  category: {
    id: 0,
    name: "no category",
    slug: "no category",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2026-02-05T10:45:12.000Z",
    updatedAt: "2026-02-05T10:45:12.000Z",
  },
  images: [
    "https://i.imgur.com/KeqG6r4.jpeg",
    "https://i.imgur.com/xGQOw3p.jpeg",
    "https://i.imgur.com/oO5OUjb.jpeg",
  ],
  creationAt: "2026-02-05T10:45:12.000Z",
  updatedAt: "2026-02-05T10:45:12.000Z",
};

 init();


