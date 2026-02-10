var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCategories } from "../api/categories.js";
import { getBaseURL } from "../services/index.js";
import { showToast } from "../services/toast.js";
console.log("categories bar component run successfully ✅");
class AppCategories extends HTMLElement {
    constructor() {
        super();
        this.baseUrl = getBaseURL();
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield getCategories();
                this.render(categories);
            }
            catch (error) {
                console.error(error);
                showToast(error instanceof Error ? error.message : "Something went wrong", "error");
                this.innerHTML = `
      <h>Unable to load categories</h1>
      
     
      `;
            }
        });
    }
    render(categories) {
        this.innerHTML = `
    <nav class="navigationCategories hidden sm:flex mt-6 justify-center font-[600] text-[#797474]">
      <a
        href="${this.baseUrl}index.html"
        class="py-3 px-3 md:px-6 lg:px-7 text-md md:text-lg xl:text-xl"
      >
        Home
      </a>

      ${fakeCategories.map(category => `
  <div class="group relative">
    <span>${category.name}</span>

    <div class="mega-menu">
      ${category.subCategories.map(sub => `
        <a href="products.html?sub=${sub.id}">
          <img src="${this.baseUrl}${sub.image}" />
          <span>${sub.name}</span>
        </a>
      `).join("")}
    </div>
  </div>
`).join("")}
    </nav>
  `;
    }
}
customElements.define("app-categories", AppCategories);
//  <span class="mr-1!">categories</span>
//    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//      stroke="currentColor" class="size-4 group-hover:rotate-180 transition-all duration-300 ease-out ">
//      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
//    </svg>
//    <div class="absolute z-10 left-8 p-5! top-full mt-2 rounded-md overflow-hidden bg-[#EFF1F5]
//    opacity-0 scale-y-0 translate-y-2
//    transition-all duration-300 ease-out
//    group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0
//      shadow-[0_15px_35px_rgba(0,0,0,0.25)]
//       grid grid-cols-[max-content_max-content] origin-top
//      ">
//      <a href="${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
//      <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
//      <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
//      <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
//      <a href=".${this.baseUrl}src/pages/products.html" class="bg-white p-2! m-2!"> subCategory </a>
//    </div>
export const fakeCategories = [
    {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        subCategories: [
            {
                id: 101,
                name: "Mobiles",
                image: "public/products/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg",
            },
            {
                id: 102,
                name: "Laptops",
                image: "public/products/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg",
            },
            {
                id: 103,
                name: "Accessories",
                image: "public/products/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg",
            },
            {
                id: 104,
                name: "Gaming",
                image: "public/products/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg",
            },
        ],
    },
    {
        id: 2,
        name: "Fashion",
        slug: "fashion",
        subCategories: [
            {
                id: 201,
                name: "Men",
                image: "public/products/alexander-andrews-BX4Q0gojWAs-unsplash.jpg",
            },
            {
                id: 202,
                name: "Women",
                image: "public/products/alexander-andrews-BX4Q0gojWAs-unsplash.jpg",
            },
            {
                id: 203,
                name: "Shoes",
                image: "public/products/alexander-andrews-BX4Q0gojWAs-unsplash.jpg",
            },
            {
                id: 204,
                name: "Bags",
                image: "public/products/alexander-andrews-BX4Q0gojWAs-unsplash.jpg",
            },
        ],
    },
    {
        id: 3,
        name: "Books",
        slug: "books",
        subCategories: [
            {
                id: 301,
                name: "Programming",
                image: "public/products/ali-bakhtiari-7ic3yF64FS8-unsplash.jpg",
            },
            {
                id: 302,
                name: "Design",
                image: "public/products/ali-bakhtiari-7ic3yF64FS8-unsplash.jpg",
            },
            {
                id: 303,
                name: "Business",
                image: "public/products/ali-bakhtiari-7ic3yF64FS8-unsplash.jpg",
            },
            {
                id: 304,
                name: "Self Development",
                image: "public/products/ali-bakhtiari-7ic3yF64FS8-unsplash.jpg",
            },
        ],
    },
    {
        id: 4,
        name: "Gaming",
        slug: "gaming",
        subCategories: [
            {
                id: 401,
                name: "Consoles",
                image: "public/products/daniel-korpai-hbTKIbuMmBI-unsplash.jpg",
            },
            {
                id: 402,
                name: "Controllers",
                image: "public/products/daniel-korpai-hbTKIbuMmBI-unsplash.jpg",
            },
            {
                id: 403,
                name: "Headsets",
                image: "public/products/daniel-korpai-hbTKIbuMmBI-unsplash.jpg",
            },
            {
                id: 404,
                name: "Games",
                image: "public/products/daniel-korpai-hbTKIbuMmBI-unsplash.jpg",
            },
        ],
    },
];
//# sourceMappingURL=categoriesBar.js.map