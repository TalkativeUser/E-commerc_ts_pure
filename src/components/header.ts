
"use strict";
// I use this method because any reusable component contain <img src='' /> or <a href='' > has not static path , 
// and baseUrl on githup pages it's not like localhost
import  {getBaseURL} from '../services/index.js'

class AppHeader extends HTMLElement {

    private baseUrl: string;
   constructor() {

        super() 
        this.baseUrl = getBaseURL();
   }
  

  connectedCallback() {
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
          <button class="cart border rounded-md " style="padding-inline: 20px; padding-block: 5px; ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

          </button>
          <button class="favorits border rounded-md " style="padding-inline: 20px; padding-block: 5px; ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

          </button>
          <button class="border rounded-md " style="padding-inline: 20px; padding-block: 5px; ">
            sign in
          </button>
        </div>
      </nav>

            <div class="navigationCategories hidden sm:flex mt-6  justify-center font-[600] text-[#797474] ">
                    <a href="${this.baseUrl}index.html" class=" py-3!  px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl  "> Home </a>

        <div
          class="py-3!  px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl  group relative flex  sm:justify-center items-center ">
          <span class="mr-1!">categories</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4 group-hover:rotate-180 transition-all duration-300 ease-out ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>


          <div class="absolute z-10 left-8 p-5! top-full mt-2 rounded-md overflow-hidden bg-[#EFF1F5]
          opacity-0 scale-y-0 translate-y-2
          transition-all duration-300 ease-out
          group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0
            shadow-[0_15px_35px_rgba(0,0,0,0.25)]
             grid grid-cols-[max-content_max-content] origin-top
 
            ">

            <a href="${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
            <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
            <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
            <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
            <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
          </div>

        </div>
        <div class=" py-3!  px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl  "> categories </div>
        <div class=" py-3!  px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl  "> categories </div>
        <div class=" py-3!  px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl   "> categories </div>

      </div>

    `;
  }
}
customElements.define("app-header", AppHeader);
