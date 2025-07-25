document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const container = document.getElementById("cartItemsContainer");

  if (cartItems.length === 0) {
    container.innerHTML = `<p class="d-flex justify-content-center align-items-center text-white font-1">No products in your cart.</p>`;
    return;
  }

  cartItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="menu-card col-md-4 col-sm-6 w-75 ">
        <img src="${item.image}" class="menu-img py-4 object-fit-contain border rounded" alt="${item.name}">
        <div class="menu-content text-white text-center py-2">
          <h5 class="card-title my-3">${item.name}</h5>
          <p class="card-text">$${item.price}</p>
          <button class="btn btn-danger btn-sm" onclick="removeCartItem(${index})">
            🗑️ Remove
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
});
