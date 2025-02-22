// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;
const spanTotal = document.getElementById( "total_price" );
spanTotal.innerText = total;
const cartList = document.getElementById("cart_list");
let countSpan = document.getElementById("count_product");

// Exercise 1
function buy(id) {
    let product = products.find(p => p.id == id);
    let idList = cart.map(p => p.id);
    if (!idList.includes(id)){
        product.quantity = 1;
        cart.push(product);
    }
    else {
        for (let p of cart){
            if (p.id === id){
                p.quantity ++;
            }
        }
     }
     countSpan.innerHTML = cart.length;
}

// Exercise 2
function cleanCart() {

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}