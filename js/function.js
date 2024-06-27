console.log("hello world!");

//---------Seleccionar elementos
const title = document.getElementById("txt");
//console.log(title);

const image = document.getElementsByClassName("logo");
//console.log(image[1]);

const tags = document.getElementsByTagName("section");
//console.log(tags[6]);

const elem = document.querySelectorAll(".logo")
//console.log(elem);


//--------Crear elemento y agregar attribute
const parent = document.querySelector(".products");
const newElem = document.createElement("section");
newElem.setAttribute("class","new");

parent.append(newElem);


//------Attributes
const logo = document.querySelector(".logo");
//logo.setAttribute("src", "img/mexico.jpeg");
console.log(logo.getAttribute("src"));
console.log(logo.hasAttribute("src"));
//logo.removeAttribute("src");

if(logo.hasAttribute("src")) {
    //alert("tiene src!")
}


//-------CSS Classes
const parent2 = document.querySelector(".products");
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild;

price.classList.add("red");
price.classList.replace("red","blue");
price.classList.remove("blue");

//----- Modificar Texto
const button = document.getElementsByTagName("button");
console.log(button[0].innerText);

button[9].innerText = "Comprar ahora";

//-----Modificar Style
console.log(button[0].style);
//button[0].style.backgroundColor = "gray";


//--------Eventos 

const elemButton = button[10];
elemButton.addEventListener('click', () => {
    elemButton.classList.toggle("toggle");
});

//Event Borrar elementos del carrito
const iconRemove = document.querySelectorAll(".remove");

iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
});




// Event Mostrar el contenido del carrito al hacer click
const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});



// Hover sobre un item
const product = document.querySelector(".mouse");

product.addEventListener("mouseenter", () => {
    product.style.opacity = ".5";
})

product.addEventListener("mouseleave", () => {
    product.style.opacity = "1";
})

//Event Mostrar contenido del menu, al igual darle una funcion al icono de x para cerrar el menu
const menuAccount = document.querySelector("header");
const menuIcon = menuAccount.firstElementChild;
const menu = document.querySelector(".menu" );
const closeIcon = document.querySelector(".close");

menuIcon.addEventListener("click", ()=> {
    menu.classList.toggle("menuShow");
});

closeIcon.addEventListener("click", () => {
    menu.classList.remove("menuShow");
});




//Event Añadir productos al carrito
// Seleccionar todos los botones "Añadir a carrito"
const addToCartButtons = document.querySelectorAll('.add');

// Agregar evento de clic a cada botón
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Función para manejar el evento de clic
function addToCart(event) {
    const product = event.target.closest('section'); 
    const productName = product.querySelector('h2').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
    const productImage = product.querySelector("img").src

    // Agregar el producto al carrito 
    addToCartList(productName, productPrice, productImage);
}
let cartItemCount = 0;

// Función para agregar el producto al carrito
function addToCartList(name, price, imageSrc) {
    const cart = document.querySelector('.cart');

    // Crear un nuevo elemento de producto en el carrito
    const cartItem = document.createElement('section');
    cartItem.innerHTML = `
        <img src="${imageSrc}" />
        <h3>${name}</h3>
        <p>$${price.toFixed(2)}</p>
        <i class="remove"><img src="img/remove.svg" /></i>
    `;

    // Agregar el nuevo elemento al carrito
    const buyButton = document.querySelector(".toggle");
    cart.insertBefore(cartItem, buyButton);

    // Incrementar el conteo de elementos en el carrito
    cartItemCount++;
    // Actualizar el texto del contador en el ícono del carrito
    const cartItemCountElement = document.querySelector('.cartItemCount');
    cartItemCountElement.textContent = cartItemCount.toString();

}


//Event para eliminar los elementos dinamicos añadidos al carrito
const cartRemove = document.querySelectorAll(".remove");

cartRemove.forEach(elem => {
    elem.addEventListener("click", event => {
      if (event.target.classList.contains('remove')) {
        const cartItem = event.target.closest('article');
        cartItem.remove();
      }
    });
}); 

