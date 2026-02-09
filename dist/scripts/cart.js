var _a;
import '../components/drawer.js';
import '../components/header.js';
import { renderCartProducts } from '../render/cart.js';
import './core/stateManager.js';
const state = document.querySelector("app-state");
if (state === null || state === void 0 ? void 0 : state.dataset) {
    const products = JSON.parse((_a = state.dataset.cartProducts) !== null && _a !== void 0 ? _a : "[]");
    renderCartProducts(products);
}
//# sourceMappingURL=cart.js.map