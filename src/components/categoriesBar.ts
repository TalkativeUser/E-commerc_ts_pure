import { getCategories } from "../api/categories.js";
import { getBaseURL } from "../services/index.js";
import { showToast } from "../services/toast.js";
import { Category } from "../types.js";
export const fakeCategories:IfakeCategory[]  = [
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
class AppCategories extends HTMLElement {
  private baseUrl: string;
  constructor() {
    super()
    this.baseUrl = getBaseURL();
  }
  async connectedCallback() {
    console.log('categories done ');
    this.render(fakeCategories)
    // try {
    //   const categories = await getCategories();
    //   this.render(categories);
    // } catch (error) {
    //   console.error(error);

    //   showToast(
    //     error instanceof Error ? error.message : "Something went wrong",
    //     "error",
    //   );
    //   this.innerHTML = `
    //   <h>Unable to load categories</h1>
      
     
    //   `;
    // }
  }


private render(fakeCategories:IfakeCategory[]) {
  this.innerHTML= `
  
  <div class="navigationCategories hidden sm:flex mt-6  justify-center font-[600] text-[#797474] ">
                    <a href="${this.baseUrl}index.html" class=" py-3 px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl  "> Home </a>

                    ${ fakeCategories.map((category:IfakeCategory) =>`
                      
                       <div
          class=" px-3! md:px-6! lg:px-7!  text-md md:text-lg  xl:text-xl  group relative flex  sm:justify-center items-center ">
          <span class="mr-1!">${category.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4 group-hover:rotate-180 transition-all duration-300 ease-out ">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>


      <div
  class="absolute z-20 left-1/2 top-full -translate-x-1/2
         rounded-2xl bg-[#EFF1F5]
         p-2
         opacity-0 scale-0 translate-y-3
         transition-all duration-300 ease-out
         group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
         origin-top
         shadow-[0_20px_45px_rgba(0,0,0,0.25)]
         grid grid-cols-2 gap-2
         min-w-60"
>
  
    ${ category.subCategories.map((subCategory)=> `
      
       <a
    href="${this.baseUrl}src/pages/products.html"
    class="group/item flex flex-col items-center
           rounded-xl bg-white p-2
           hover:shadow-md transition"
  >
    <img
      src="${this.baseUrl}${subCategory.image}"
      alt="Electronics"
      class="w-full h-12 object-cover rounded-lg"
    />
    <span
      class="mt-2 text-sm text-gray-700
             group-hover/item:text-black"
    >
      ${subCategory.name}
    </span>
  </a>
      `).join('') }
 
</div>


        </div>
                      
                      ` ).join('') }
       

      </div>`;
}


}

customElements.define("app-categories", AppCategories);

interface IfakeCategory{

  id:number;
  name:string;
  slug:string;
  subCategories:IfakeSubCategory[]
}
interface IfakeSubCategory{
id:number;
name:string;
image:string

}

 
    // ${fakeCategories.map((category:IfakeCategory) => `
        
    //    <nav class="navigationCategories hidden sm:flex mt-6 
    //      justify-center font-[600] text-[#797474] bg-red-400 ">

    //       <!-- Category Name -->
    //       <div class="py-3 px-3 md:px-6 lg:px-7 text-md md:text-lg xl:text-xl
    //                   flex items-center cursor-pointer">
    //         ${category.name}
    //       </div>

    //       <!-- SubCategories Dropdown -->
    //       <div
    //         class="absolute z-20 left-1/2 top-full mt-4 -translate-x-1/2
    //                rounded-2xl bg-[#EFF1F5]
    //                p-6
    //                opacity-0 scale-0 translate-y-3
    //                transition-all duration-300 ease-out
    //                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
    //                origin-top
    //                shadow-[0_20px_45px_rgba(0,0,0,0.25)]
    //                grid grid-cols-2 gap-4
    //                min-w-[350px]"
    //       >
    //         ${category.subCategories.map((sub:IfakeSubCategory) => `
    //               <a
    //                 href="${this.baseUrl}src/pages/products.html?subCategory=${sub.id}"
    //                 class="group/item flex flex-col items-center
    //                        rounded-xl bg-white p-3
    //                        hover:shadow-md transition"
    //               >
    //                 <img
    //                   src="${this.baseUrl}${sub.image}"
    //                   alt="${sub.name}"
    //                   class="w-full h-20 object-cover rounded-lg"
    //                 />
    //                 <span
    //                   class="mt-2 text-sm font-semibold text-gray-700
    //                          group-hover/item:text-black"
    //                 >
    //                   ${sub.name}
    //                 </span>
    //               </a>
    //             `
    //           )
    //           .join("")}
    //       </div>

    //     </nav>
    //   `
    //   )
    //   .join("")}
