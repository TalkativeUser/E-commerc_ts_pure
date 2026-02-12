"use strict";
class WraperPages extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <main class="min-h-screen flex w-full flex-col items-center space-y-4">
      <div class="container mx-auto px-4">
        ${this.innerHTML}
      </div>
    </main>
  `;
    }
}
customElements.define("wraper-pages", WraperPages);
//# sourceMappingURL=wraperPages.js.map