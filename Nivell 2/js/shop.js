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

// añadimos las propiedades quantity, subtotal y total a los objetos del array product, y lo llamamos Cart

var cart = [];
let m;
for(m=0; m<products.length; m++) {
    cart.push(products[m]);
}

let n;
for(n=0; n<cart.length; n++) {
cart[n].quantity = 0;
cart[n].subtotal= cart[n].quantity * cart[n].price;
cart[n].subtotalWithDiscount = cart[n].price;
}

console.log(cart);

// total del cartList
var total = 0;

// contador del cart
let contador = 0;

function actualitzarContador() {
    let m;
    contador =0;
    for(m=0; m<cart.length; m++) {
    if (cart[m].quantity > 0) {
        contador += cart[m].quantity;
    }    
    }
    document.getElementById("count_product").innerHTML = contador;
}

// Exercise aqui afegirem directament quantitats al array cart
function buy(id) {

    let ref = id-1;
    let n;
    for(n=0; n<products.length; n++) {
    if (ref == n) {
        cart[n].quantity ++;
        total += products[n].price;
       }
    }

    actualitzarContador();
    calculPromo();

}

// Exercise 2

function cleanCart() {

    var Parent = document.getElementById("cart_list");
    while(Parent.hasChildNodes())
    {
    Parent.removeChild(Parent.firstChild);
    }

    document.getElementById("total_price").innerHTML = 0;
    
    let borrarCart;
    for(borrarCart=0; borrarCart<cart.length; borrarCart++) {
        cart[borrarCart].quantity=0;
    }
    
    let contador = 0;
    document.getElementById("count_product").innerHTML = contador;

    console.log(cart);
}


// Exercise 4

function calculPromo() {

    //calcul de promocions 

    let o;
    for(o=0; o<cart.length; o++) {
        if(cart[o].id==1 && cart[o].quantity > 2) {
            cart[o].price = 10;
        }
        if(cart[o].id==3 && cart[o].quantity > 10) {
            cart[o].price *=0.66;
        }
    }

}


let totalPrice = 0;

// Exercise 6
function printCart() {
 
    calculPromo();
      //impresió al modal + calcul de totals
      totalPrice = 0;
      var Parent = document.getElementById("cart_list");
      while(Parent.hasChildNodes()){
      Parent.removeChild(Parent.firstChild);
      }

    for(c=0; c<cart.length; c++) {
        if (cart[c].quantity > 0) {
        cart[c].subtotalWithDiscount = cart[c].price * cart[c].quantity;    
        let print = document.getElementById("cart_list");
        let row = print.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "-";
        deleteButton.className = "boton_carrito";
        deleteButton.id = cart[c].id;
        cell5.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            let d;
            let index = deleteButton.id;
            for (d=0; d<cart.length; d++) {
                if (cart[d].id == index ) {
                    cart[d].quantity -=1;
                    console.log(cart);
                    if (cart[d].quantity >0) {
                        printCart();
                    }
                    if (cart[d].quantity <=0) {
                        var td = event.target.parentNode; 
                        var tr = td.parentNode;
                        tr.parentNode.removeChild(tr);
                        printCart();
                    }
                printCart();    
                }
            }
        });
        let cell6 = row.insertCell();
        let addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.className = "boton_carrito";
        addButton.id = cart[c].id;
        cell6.appendChild(addButton);
        addButton.addEventListener("click", () => {
            let d;
            let index = addButton.id;
            for (d=0; d<cart.length; d++) {
                if (cart[d].id == index ) {
                    cart[d].quantity +=1;
                    printCart();    
                }
            }
        });
        cell1.innerHTML = cart[c].name;
        cell2.innerHTML = cart[c].price.toFixed(2);
        cell3.innerHTML = cart[c].quantity;
        cell4.innerHTML = cart[c].subtotalWithDiscount.toFixed(2); 
        totalPrice += cart[c].subtotalWithDiscount; 
        }
    }

    document.getElementById("total_price").innerHTML = totalPrice;
}


// Exercise 7
function addToCart(id) {
    // ***** Esto lo he conseguido simplificando el proceso arriba
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {

}

function open_modal(){
	console.log("Open Modal");
	printCart();
}