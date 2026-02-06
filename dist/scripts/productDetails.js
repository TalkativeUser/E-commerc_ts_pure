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
const wraperProductImg = document.getElementById("wraper-product-img");
const productImg = document.getElementById("product-img");
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
            console.log(" render / product dtails init method started");
            const product = yield getProductDetails(id);
            const res = productDetails(product, container);
        }
        catch (_a) {
            const product = staticDetails;
            const res = productDetails(product, container);
            window.alert('this product is not found , try another product');
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
if (wraperProductImg && productImg) {
    wraperProductImg.addEventListener("mouseenter", () => {
        productImg.style.transform = `scale(2)`;
        productImg.style.transition = "transform 0.4s ease";
    });
    wraperProductImg.addEventListener("mousemove", (e) => {
        const rect = wraperProductImg.getBoundingClientRect();
        const translatMouseX = e.clientX - rect.left; // mouse X inside wrapper
        const translatMouseY = e.clientY - rect.top; // mouse Y inside wrapper
        const xPercent = (translatMouseX / rect.width) * 100;
        const yPercent = (translatMouseY / rect.height) * 100;
        productImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    });
    wraperProductImg.addEventListener("mouseleave", () => {
        productImg.style.transform = `scale(1)`;
        //  السطر ده انا همشته لانه بيخلى سلوك غريب يحصل وهو ان لما بطلع الماوس بره العنصر الصورة لو كان ال origin  بتاعها مثلا 100 بكسل عرض وطول السطر ده بمجرد ما الماوس يطلع بره العنصر بيغير مكان ال  origin  الى المنتصف وبعد كده ال  scale  يصغر وده احساس وحش جدا للمستخدم المفروض ال  origin  ميتغيرش خالص والصورة ترجع لحجمها الطبيعى
        // productImg.style.transformOrigin = "center center";
    });
}
else {
    console.log("wrapper or image is not defined");
}
//# sourceMappingURL=productDetails.js.map