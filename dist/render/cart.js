export function renderCartProducts(products) {
    const container = document.getElementById("cart-products");
    let subTotal = 0;
    const discount = 10;
    if (!container)
        return;
    // لو الكارت فاضي
    if (products.length === 0) {
        container.innerHTML = `
      <div class="text-center text-gray-400 mt-10">
        🛒 Your cart is empty
      </div>
    `;
        return;
    }
    container.innerHTML = `

          <!-- Cart Items -->
      <section  class="lg:col-span-2 space-y-6">
     
      ${products.map((product) => {
        subTotal += product.price * product.quantity;
        return `
              <div class="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
  
  <img
    src="${product.images[0]}"
    alt="${product.title}"
    class="w-24 h-24 object-cover rounded-lg"
  />

  <div class="flex-1 flex flex-col justify-between">
    <div>
      <h3 class="font-semibold text-gray-800 line-clamp-1">
        ${product.title}
      </h3>
      <p class="text-sm text-gray-500 mt-1">
        $${product.price} × ${product.quantity}
      </p>
    </div>

    <div class="flex items-center justify-between mt-2">
      
      <!-- total price !-->
      <span class="font-bold text-indigo-600">
        $${(product.price * product.quantity).toFixed(2)}
      </span>

      <div class="flex flex-col gap-y-2" >

       <button 
         data-id="${product.id}"
        class="w-full py-1.5 text-sm text-center text-red-500 px-3 rounded-lg
               hover:bg-red-50 hover:text-red-600 border border-red-300 transition duration-200"
       > Remove </button>
  
      <!-- Quantity Controls  -->
      <div class="flex items-center border rounded-lg overflow-hidden">

        <button
          data-id="${product.id}"
          class="decrease px-3 py-1 text-gray-600 hover:bg-gray-100 active:scale-90 transition"
        >
          −
        </button>

        <span class="px-3 text-sm font-medium">
          ${product.quantity}
        </span>

        <button
          data-id="${product.id}"
          class="increase px-3 py-1 text-gray-600 hover:bg-gray-100 active:scale-90 transition"
        >
          +
        </button>

      </div>
      </div>
      

    </div>
  </div>
</div>

            `;
    }).join('')}
      </section>

      


         <!-- Summary -->
      <aside class="bg-white rounded-2xl shadow-md p-6 h-fit">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">
          Order Summary
        </h2>

        <div class="space-y-4 text-sm text-gray-600">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>$${subTotal.toFixed(2)} </span>
          </div>

          <div class="flex justify-between">
            <span>Discount</span>
            <span class="text-green-600">10%</span>
          </div>

          <div class="flex justify-between font-semibold text-base text-gray-800 pt-4 border-t">
            <span>Total</span>
            <span>$${(subTotal - (subTotal * (discount / 100))).toFixed(2)} </span>
          </div>
        </div>

        <button
          class="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-medium
                 hover:bg-indigo-700 transition"
        >
          Proceed to Checkout
        </button>
      </aside>
      `;
}
//# sourceMappingURL=cart.js.map