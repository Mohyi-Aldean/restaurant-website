function getCartItems() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

function saveCartItems(items) {
  localStorage.setItem("cartItems", JSON.stringify(items));
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const items = getCartItems();
    cartCount.textContent = items.length;
  }
}

function addToCart(product) {
  const items = getCartItems();
  items.push(product);
  saveCartItems(items);
  updateCartCount();
}

function removeCartItem(index) {
  const items = getCartItems();
  items.splice(index, 1); 
  saveCartItems(items);
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});
