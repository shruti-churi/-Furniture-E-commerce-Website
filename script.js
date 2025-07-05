document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("responseMessage").textContent = "Thank you! We'll get back to you soon.";
  this.reset();
});



 function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart`);
  }