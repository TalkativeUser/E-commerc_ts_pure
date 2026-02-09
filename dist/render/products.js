import { getBaseURL } from "../services/index";
export function renderProducts(products, container, isFaildProducts) {
    const baseUrl = getBaseURL();
    container.innerHTML = `

  
          ${isFaildProducts ? `<h2 class="text-3xl font-semibold text-center text-red-300 mt-8">Faild to get Products , These temprory products try again later ❌</h2>` : ""}

  <div
         
          class="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-16 place-items-center "
        >
        ${products
        .map((p) => ` 
      <a href="${baseUrl}/src/pages/productDetails.html?id=${[p.id]}" >
      <div class="group relative flex h-full max-w-75 transform flex-col items-start justify-start space-y-2 rounded-lg " > 
              <div class="h-60 w-full overflow-hidden rounded-lg shadow-xl" >
                    <img
                      src="${p.images[0]}"
                      alt="Product${p.id} "
                      class="h-60 w-full origin-center object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
          
              </div>

                <div class="flex flex-col items-start justify-between p-4" >
                      <div class="flex flex-row items-start justify-between space-x-4" >
                          <h3 class="line-clamp-2 text-start  text-lg font-semibold  md:text-xl">${p.title} 1</h3>
                          <p >  ${p.price} </p>
                      </div>
                      <p class="text-sm"> ${p.category.name} </p>
                </div>
      
      </div>
      
      
      
      
        

    `)
        .join("")}
        
        </div>
  `;
}
//# sourceMappingURL=products.js.map