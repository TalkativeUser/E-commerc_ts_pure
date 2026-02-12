var _a;
import '../components/drawer.js';
import '../components/header.js';
import '../components/categoriesBar.js';
import { renderCartProducts } from '../render/cart.js';
import { appState } from './core/stateManager.js';
import './core/stateManager.js';
import '../components/wraperPages.js';
if (appState.state) {
    const products = (_a = appState.state.cartProducts) !== null && _a !== void 0 ? _a : "[]";
    renderCartProducts(products);
}
//# sourceMappingURL=cart.js.map