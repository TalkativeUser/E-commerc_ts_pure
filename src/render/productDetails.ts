import { Product } from "../types";

 
  export function productDetails(product:Product , container:HTMLElement) {


    container.innerHTML= `
   
        <div
          class=" w-full  px-2 sm:px-6 lg:px-10 flex justify-center items-start"
           
          >
          <div  id="wraper-product-img" class="rounded-xl overflow-hidden" >

            <img
              src="${product.images[0]}"
              alt="${product.title}"
              id="${product.id}"
              class="w-full max-w-md lg:max-w-full aspect-square object-cover rounded-xl "
            />
          </div>
        </div>
        <div class="productContent lg:px-10 mt-3 md:mt-0 w-full max-w-md lg:max-w-full flex flex-col ">
          <div class="detailsActions flex gap-3   ">
            <div
              class="wishAndCartBtn bg-[#DDDFE4] py-2 px-2 rounded-lg flex gap-4 max-w-sm justify-between "
            >
              <button class="px-2 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span>Add to cart</span>
              </button>
              <hr class="w-px h-full bg-gray-400 border-0" >
              <button class="px-2 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span>Wishlist</span>
              </button>
            </div>
            <button class="share bg-[#C7BAD9] px-3 rounded-lg">sh</button>
          </div>
          <h1 class="text-5xl font-bold text-[#4b4e68] mt-3 " >${product.title}</h1>
          <h2 class="font-semibold text-2xl text-[#4b4e68]" >$${product.price}</h2>
          <hr class="my-8 w-[80%] mx-auto text-[#dfdede] " />
          <h3 class="text-xl font-semibold text-[#4b4e68] ">Description</h3>
          <p class="text-lg font-normal text-[#4b4e68]" > ${product.description} </p>
        </div>
       
       `
 }
