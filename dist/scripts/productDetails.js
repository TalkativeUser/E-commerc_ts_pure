var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getProductDetails } from "../api/productDetails.js";
import { productDetails } from "../render/productDetails.js";
function getProductID() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id ? Number(id) : null;
}
const container = document.getElementById("product-details");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!container)
            return;
        const id = getProductID();
        if (!id) {
            container.innerHTML = "Invalid product id";
            return;
        }
        let isFaildProduct;
        try {
            console.log(" render / product dtails init method started");
            const product = yield getProductDetails(id);
            isFaildProduct = false;
            productDetails(product, container, isFaildProduct);
        }
        catch (_a) {
            isFaildProduct = true;
            const product = staticDetails;
            productDetails(product, container, isFaildProduct);
        }
    });
}
const staticDetails = {
    id: 12,
    title: "fake or temprory product",
    slug: "fake or temprory product",
    price: 0,
    description: "not found this product",
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
//# sourceMappingURL=productDetails.js.map