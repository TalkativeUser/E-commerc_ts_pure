"use strict";
// I use this method because any reusable component contain <img src='' /> or <a href='' > has not static path ,
// and baseUrl on githup pages it's not like localhost
import { getBaseURL } from "../services/index.js";

class AppDrawer extends HTMLElement {
  private baseUrl: string;
  constructor() {
    super();
    this.baseUrl = getBaseURL();
  }

  connectedCallback() {
    this.innerHTML = `

       <aside
        class="bg-[#EFF1F5] sm:hidden py-3! px-2!  fixed top-0 bottom-0 left-0 min-w-56 z-20 shadow-[0_15px_35px_rgba(0,0,0,0.25)] -translate-x-full has-[:checked]:translate-x-0 transition-transform duration-300 ease-in-out ">

        <label>

          <div
            class="bg-white absolute top-1/2 -end-0.5 group translate-x-1/2 -translate-y-1/2 border border-green-300 has-[:checked]:border-red-300 cursor-pointer h-8 w-8 flex justify-center items-center rounded-full ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"
              class="size-6 transition-colors text-green-500 group-has-[:checked]:text-red-300  group-has-[:checked]:rotate-180  ">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <input type="checkbox" id="toggleSidebar" class="hidden" />
          </div>



        </label>



        <h3 class="text-xl font-[600]  text-[#797474] "> Categories </h3>
        <ul class="categories text-md font-[400] text-[#797474] mt-2! ">
          <!-- border border-[#c6bcbcbd]  -->
          <li class="py-1! hover:bg-[#776d6d17] px-2! rounded-md group ">
            <div class=" flex justify-between items-center">
              <span>Category</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 group-hover:rotate-180 transition-all duration-300 ease-out ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

            <ul class="ps-2! max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out ">
              <li class="py-1!"> <a href="${this.baseUrl}src/pages/products.html"  > subCategory </a> </li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>

            </ul>

          </li>
          <li class="py-1! hover:bg-[#776d6d17] px-2! rounded-md group ">
            <div class=" flex justify-between items-center">
              <span>Category</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 group-hover:rotate-180 transition-all duration-300 ease-out ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

            <ul class="ps-2! max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-700 ease-in-out ">
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>

            </ul>

          </li>
          <li class="py-1! hover:bg-[#776d6d17] px-2! rounded-md group ">
            <div class=" flex justify-between items-center">
              <span>Category</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-4 group-hover:rotate-180 transition-all duration-300 ease-out ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

            <ul class="ps-2! max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out ">
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>
              <li class="py-1!">subCategory</li>

            </ul>

          </li>

        </ul>
      </aside>
    
    `;
  }
}
customElements.define("app-drawer", AppDrawer);
