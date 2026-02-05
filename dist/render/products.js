export function renderProducts(products, container) {
    container.innerHTML = products
        .map((p) => ` 
      <a href="/src/pages/productDetails.html?id=${[p.id]}" >
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
        .join("");
}
//# sourceMappingURL=products.js.map