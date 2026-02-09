export function renderCartProducts(products) {
    const container = document.getElementById("cart-products");
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
    container.innerHTML = products
        .map((product) => `
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
              <span class="font-bold text-indigo-600">
                $${product.price * product.quantity}
              </span>

              <button
                data-id="${product.id}"
                class="remove-from-cart text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      `)
        .join("");
}
//# sourceMappingURL=cart.js.map