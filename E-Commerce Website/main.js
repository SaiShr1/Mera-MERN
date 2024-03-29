// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
}

// Close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
}


// Main Cart Working 
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready();
}

// Making Function
function ready() {
    // Remove items from main cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

// Remove items from main cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}
