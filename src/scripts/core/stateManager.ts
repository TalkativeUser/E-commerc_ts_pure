class StateManager extends HTMLElement {
  connectedCallback() {
    // default state
    this.dataset.step ??= "1";
    this.dataset.container ??= "normal";
    
  }
}

customElements.define("app-state", StateManager);
