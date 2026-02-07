"use strict";
class StateManager extends HTMLElement {
    connectedCallback() {
        var _a, _b;
        var _c, _d;
        // default state
        (_a = (_c = this.dataset).step) !== null && _a !== void 0 ? _a : (_c.step = "1");
        (_b = (_d = this.dataset).container) !== null && _b !== void 0 ? _b : (_d.container = "normal");
    }
}
customElements.define("app-state", StateManager);
//# sourceMappingURL=stateManager.js.map