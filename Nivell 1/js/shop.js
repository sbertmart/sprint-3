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
// lo resuelvo mas adelante

// contador del icono del carrito
let counter = 0;

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
// creamos el Cart llamando a todos los objetos del array products y le añadimos las propiedades quantity, subtotal y total 
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

// total del cartList
var total = 0;

// Exercise 1
// en lugar de añadir objetos de products a otro array, trabajo sobre el array cart, con todos los productos con la cantidad a 0 y solo añado 1 unidad cada vez que alguien compra.
function buy(id) {

    let ref = id-1;
    let n;
    for(n=0; n<=products.length; n++) {
    if (ref == n) {
        cart[n].quantity +=1;
        total += cart[n].price;
        cart[n].subtotal= cart[n].quantity * cart[n].price;
        cart[n].subtotalWithDiscount = cart[n].subtotal;
        counter +=1;
        document.getElementById("count_product").innerHTML = counter;
       }
    }
console.log ("Has comprado un producto");
console.log(cart);
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    calculateTotal();
}

// Exercise 2

function cleanCart() {
// elimino la cartList que crearemos más adelante, de esta forma no se duplican las filas al abrir el modal.    

    cleanRows();
    counter=0;
    document.getElementById("count_product").innerHTML = 0;
    document.getElementById("total_price").innerHTML = 0;
    
    cartList.splice(0,cartList.length);
    
}

// elimino las filas del modal cada vez que se abre, se vuelven a generar actualizadas y no se añaden

function cleanRows() {
    var tableHeaderRowCount = 0;
    var table = document.getElementById('cart_list');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

}

// Exercise 3
// se muestra en console cada vez que compras algo
function calculateTotal() {
   
    let j;
    let total = 0;
    for(j=0; j<cart.length; j++) {
    total += cart[j].subtotalWithDiscount;
    }
    
   console.log("Total de la compra " + total + " $");
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
// generamos la lista que se nos mostrará al modal añadiendo solo los prodcutos del cart que tienen mas de 0 unidades.

function generateCart() {

    let v;
    for (v=0; v<cart.length; v++) {
       if(cart[v].quantity>0) {
        cartList.push(cart[v]);
        cartList[v].subtotal = (cartList[v].quantity * cartList[v].price);
        cartList[v].subtotalWithDiscount = cartList[v].subtotal;
       }
    }
console.log("Tu carrito");    
console.log (cartList);

}

// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


// Exercise 5
// Creamos 2 bucles for para rastrear si se cumplen las condiciones, se muestra resultado por console.
function applyPromotionsCart() {

    generateCart()

    let descuentoOli = false;
    // Ampolles d'oli
    let o;
    for(o=0; o<cartList.length; o++) {
        if (cartList[o].id == 1 && cartList[o].quantity> 2) {
            descuentoOli = true; console.log("hay descuento de aceite");
            cartList[o].price=10;
            cartList[o].subtotalWithDiscount = cartList[o].price * cartList[o].quantity;
        } 
    }

    let descuentoPastis = false;
    // Pastis

    let p;
    for(p=0; p<cartList.length; p++) {
        if (cartList[p].id == 3 && cartList[p].quantity> 10) {
            descuentoPastis = true; console.log("hay descuento de pasteleria");
            cartList[p].price *= 0.66;
            cartList[p].subtotalWithDiscount = (cartList[p].price * cartList[p].quantity).toFixed(2);
        }
    }
    // Apply promotions to each item in the array "cart"

    if (descuentoPastis == true || descuentoOli == true) {
        console.log ("Se han aplicado tus descuentos " );
    } else {console.log("Tu carrito no tiene descuentos");}

    console.log(cartList);
}

// Exercise 6
function printCart() {
    // lo primero que hacemos es llamar a la funcion que elimina todos los elementos de nuestra cartList para volver a generarla a partir de cart y que no se sumen cantidades 
    cleanCart();

    // volvemos a crear el carrito con las promociones (la funcion applyPromotionsCart incluye generateCart)
    applyPromotionsCart()

    let c;
    let totalPrice = 0;

    console.log(cartList);
    
    for(c=0; c<cartList.length; c++) {
        let print = document.getElementById("cart_list");
        let row = print.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        cell1.innerHTML = cartList[c].name;
        cell2.innerHTML = cartList[c].price.toFixed(2);
        cell3.innerHTML = cartList[c].quantity;
        cell4.innerHTML = cartList[c].subtotalWithDiscount; 
        totalPrice += cartList[c].subtotalWithDiscount; 
    }

    document.getElementById("total_price").innerHTML = totalPrice.toFixed(2);
}


 // Fill the shopping cart modal manipulating the shopping cart dom


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