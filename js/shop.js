// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
 ]


// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

// creamos el Cart
var cart = [];
let m;
for(m=0; m<products.length; m++) {
    cart.push(products[m]);
}

let n;
for(n=0; n<cart.length; n++) {
cart[n].quantity = 0;
cart[n].subtotal= 0;
cart[n].subtotalWithDiscount = 0;
}

//Se genera el array de objetos cart, que coge los datos de products y añade las propiedades de quantity, precio y descuento a cada objeto

var total = 0;

// Exercise 1
function buy(id) {

    let ref = id-1;
    let n
    for(n=0; n<=products.length; n++) {
    if (ref == n) {
        cartList.push(products[n]);
        total += products[n].price;
       }
    }
    console.log("Se ha añadido un nuevo producto a tu carrito");
    console.log(cartList);
    console.log("El total de tu carrito es de " + total + " $");
    document.getElementById("count_product").innerHTML = cartList.length;


    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {

    cartList.splice(0,cartList.length)
    total = 0;
    console.log("Tu carro esta vacio " + cartList.length);
    document.getElementById("count_product").innerHTML = cartList.length;
}

// Exercise 3
function calculateTotal() {
   
    let preu = cartList[j].price;
    let j
    let total
    for(j=0; j<=(cartList.length+1); j++) {
        total=+preu;
    }
   console.log("El total de tu compra es de " + total + " Euros")
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4

let cartListShow = [];

function generateCart() {

    let v;
    for (v=0; v<cartList.length; v++) {
        let w;
        for(w=0; w<cart.length; w++) {
            if (cartList[v].id == cart[w].id) {
                cart[w].quantity += 1; 
            }
        }
    }

    let z;
    for (z=0; z<cart.length; z++) {
        if (cart[z].quantity > 0) {
            cartListShow.push(cart[z]);
        }
    }

    //actualiza subtotales

    let y;
    for(y=0; y<cartListShow.length; y++) {
        cartListShow[y].subtotal = (cartListShow[y].quantity * cartListShow[y].price);
        cartListShow[y].subtotalWithDiscount = cartListShow[y].subtotal;
        console.log ("Producto " + cartListShow[y].name + " Cantidad " + cartListShow[y].quantity);
    }   
}

    
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


// Exercise 5
function applyPromotionsCart() {

    generateCart()

    let descuentoOli = false;
    // Ampolles d'oli
    let o;
    for(o=0; o<cartListShow.length; o++) {
        if (cartListShow[o].id == 1 && cartListShow[o].quantity> 2) {
            descuentoOli = true; console.log("hay descuento de aceite");
            cartListShow[o].subtotalWithDiscount = cartListShow[o].subtotal - 10;
        } 
    }

    let descuentoPastis = false;
    // Pastis

    let p;
    for(p=0; p<cartListShow.length; p++) {
        if (cartListShow[p].id == 3 && cartListShow[p].quantity> 10) {
            descuentoPastis = true; console.log("hay descuento de pasteleria");
            cartListShow[p].subtotalWithDiscount = cartListShow[p].subtotal * 0.6666;
        }
    }
    // Apply promotions to each item in the array "cart"

    if (descuentoPastis == true || descuentoOli == true) {
        console.log ("Se han aplicado tus descuentos " );
    } else {console.log("Tu carrito no tiene descuentos");}

    console.log(cartListShow);
}

// Exercise 6
function printCart() {

    let c;
    for(c=0; c<cartListShow; c++) {
        document.getElementById("")
    }


    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}