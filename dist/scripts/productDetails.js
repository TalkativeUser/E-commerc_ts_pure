var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { productDetails } from "../render/productDetails.js";
function getProductID() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id ? Number(id) : null;
}
const container = document.getElementById("product-details");
const wraperProductImg = document.getElementById('wraper-product-img');
const productImg = document.getElementById('product-img');
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!container)
            return;
        const id = getProductID();
        if (!id) {
            container.innerHTML = "Invalid product id";
            return;
        }
        try {
            console.log(' render / product dtails init method started');
            // const product :Product = await getProductDetails(id);
            const product = staticDetails;
            const res = productDetails(product, container);
        }
        catch (_a) {
            container.innerHTML = "Failed to load product";
        }
    });
}
const staticDetails = {
    "id": 12,
    "title": "Classic Black Baseball Cap",
    "slug": "classic-black-baseball-cap",
    "price": 58,
    "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    "category": {
        "id": 1,
        "name": "Clothes",
        "slug": "clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2026-02-05T10:45:12.000Z",
        "updatedAt": "2026-02-05T10:45:12.000Z"
    },
    "images": [
        "https://i.imgur.com/KeqG6r4.jpeg",
        "https://i.imgur.com/xGQOw3p.jpeg",
        "https://i.imgur.com/oO5OUjb.jpeg"
    ],
    "creationAt": "2026-02-05T10:45:12.000Z",
    "updatedAt": "2026-02-05T10:45:12.000Z"
};
init();
// if (wraperProductImg && productImg) {
//   wraperProductImg.addEventListener('mousemove', (e) => {
//     const rect = wraperProductImg.getBoundingClientRect();
//     // const x = e.clientX - rect.left; // mouse X inside wrapper
//     // const y = e.clientY - rect.top;  // mouse Y inside wrapper
//     // console.log('x:', x, 'y:', y);
//     console.log('boundingClientRect => ' , rect);
//   });
// } else {
//   console.log('wrapper or image is not defined');
// }
//# sourceMappingURL=productDetails.js.map