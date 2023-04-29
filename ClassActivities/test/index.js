// Create an empty array to store the shopping cart items
var cart = [];

// Add item to cart function
function addToCart(name, price) {
  // Create a new item object with name and price properties
  var item = {
    name: name,
    price: price
  };
  
  // Add item object to cart array
  cart.push(item);
  
  // Update the shopping cart display
  displayCart();
}

// Remove item from cart function
function removeFromCart(index) {
  // Remove the item at the specified index from the cart array
  cart.splice(index, 1);
  
  // Update the shopping cart display
  displayCart();
}

// Display the shopping cart function
function displayCart() {
  // Get the cart element
  var cartElement = document.getElementById("cart");
  
  // Clear the cart element
  cartElement.innerHTML = "";
  
  // Loop through each item in the cart array
  for (var i = 0; i < cart.length; i++) {
    // Create a new li element for each item
    var li = document.createElement("li");
    
    // Add the item name and price to the li element
    li.innerHTML = cart[i].name + " - $" + cart[i].price.toFixed(2);
    
    // Add a button to remove the item from the cart
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = (function(index) {
      return function() {
        removeFromCart(index);
      }
    })(i);
    
    // Add the remove button to the li element
    li.appendChild(removeButton);
    
    // Add the li element to the cart element
    cartElement.appendChild(li);
  }
}
