"use strict";
class WraperPages extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
      <main class="min-h-screen flex w-full flex-col items-center space-y-4">
        <div class="container mx-auto px-4">
          <slot></slot>
        </div>
      </main>
    `;
    }
}
customElements.define("wraper-pages", WraperPages);
//# sourceMappingURL=wraperProject.js.map