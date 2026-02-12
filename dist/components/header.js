"use strict";
import { appState } from "../scripts/core/stateManager.js";
import { getBaseURL } from "../services/index.js";
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.state = null;
        this.observer = null;
        this.baseUrl = getBaseURL();
    }
    connectedCallback() {
        this.renderHeader();
        if (!appState) {
            return;
        }
        console.log('app state ', appState);
        // الفانكشن دى بتشتغل لما بيحصل setState then call notify and call all listeners 
        // الفانكشن المبعوتة دى هى هى ال listener  اللى بيشتغل فى ال app state 
        appState.subscribe((state) => {
            this.updateFromState(state);
        });
        this.updateFromState(appState.getState());
    }
    /* ======================
         UPDATE UI FROM STATE
      ====================== */
    // الفانكشن دى مهمتها انا بتعدل ال content  فقط فى ال  ui  لان هو بالفعل اتعدل اصلا فى ال event  بتاع ال  addToCart  ولكن احنا هنا 
    //  بنعدله فى ال  ui  فقط 
    updateFromState(state) {
        var _a, _b;
        if (!state)
            return;
        console.log('state =>', state);
        const cartCount = (_a = state.cartCount) !== null && _a !== void 0 ? _a : 0;
        const wishCount = (_b = state.wishCount) !== null && _b !== void 0 ? _b : 0;
        const cartCounterEl = this.querySelector("#cart-counter");
        const wishCounterEl = this.querySelector("#wish-counter");
        if (cartCounterEl) {
            cartCounterEl.textContent = String(cartCount);
        }
        if (wishCounterEl) {
            wishCounterEl.textContent = String(wishCount);
        }
    }
    /* ======================
       RENDER
    ====================== */
    renderHeader() {
        this.innerHTML = `
    <nav class=" flex flex-col sm:flex-row sm:justify-between ">

        <div class="logo flex justify-around gap-12 items-center ">
       
          <img src="${this.baseUrl}public/logo.svg" class="w-20 h-20" alt="">

        </div>

        <div class="actions py-2 px-3 flex justify-center items-center gap-2 sm:gap-4 ">
          <div class="search relative ">
            <input id="search" type="text" class="border w-40 sm:w-52 bg-white rounded-md 
             focus:outline-none
            " style="padding-left: 30px; padding-block: 5px; ">
            <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-6 h-6 top-1/2 left-4 -translate-1/2 " fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9z" />
            </svg>
          </div>
          <a href='${this.baseUrl}src/pages/cart.html' class="cart border rounded-md relative " style="padding-inline: 20px; padding-block: 5px; ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

               <span
              id="cart-counter"
              class="absolute -top-2 -right-2 bg-red-600 text-white
                     text-xs rounded-full px-2 py-0.5">
              0
            </span>

          </a>
          <a class="favorits border rounded-md relative " style="padding-inline: 20px; padding-block: 5px; ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

               <span
              id="wish-counter"
              class="absolute -top-2 -right-2 bg-red-600 text-white
                     text-xs rounded-full px-2 py-0.5">
              0
            </span>

          </a>
          <a href="${this.baseUrl}src/pages/login.html" class="border rounded-md " style="padding-inline: 20px; padding-block: 5px; ">
            sign in
          </a>
        </div>
      </nav>

           
    `;
    }
}
customElements.define("app-header", AppHeader);
//# sourceMappingURL=header.js.map