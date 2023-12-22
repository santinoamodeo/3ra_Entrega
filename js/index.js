
//clase constructora

class Product{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}


//-------------


//Productos Iphones

const IPHONE_X = new Product(1, "Iphone X", 200, "./assets/img/IPHONE_X.jpg");
const IPHONE_XS_MAX = new Product(2, "Iphone XS Max", 300, "./assets/img/IPHONE_XS_MAX.jpg");
const IPHONE_11 = new Product(3, "Iphone 11", 250, "./assets/img/IPHONE_11.jpg");
const IPHONE_11_PRO = new Product(4, "Iphone 11 Pro", 300, "./assets/img/IPHONE_11_PRO.jpg");
const IPHONE_12 = new Product(5, "Iphone 12", 450, "./assets/img/IPHONE_12.jpg");
const IPHONE_12_PRO = new Product(6, "Iphone 12 Pro", 550, "./assets/img/IPHONE_12_PRO.jpg");
const IPHONE_13 = new Product(7, "Iphone 13", 650, "./assets/img/IPHONE_13.jpg");
const IPHONE_13_PRO = new Product(8, "Iphone 13 Pro", 750, "./assets/img/IPHONE_13_PRO.jpg");
const IPHONE_14 =  new Product(9, "Iphone 14", 750, "./assets/img/IPHONE_14.jpg")
const IPHONE_14_PRO = new Product(10, "Iphone 14 Pro", 950, "./assets/img/IPHONE_14_PRO.jpg")
const IPHONE_15 = new Product(11, "Iphone 15", 900, "./assets/img/IPHONE_15.jpg")
const IPHONE_15_PRO = new Product(12, "Iphone 15 Pro", 1100, "./assets/img/IPHONE_15_PRO.jpg")


//-------------


//Array que recibe productos

const STOCK = [IPHONE_X, IPHONE_XS_MAX, IPHONE_11, IPHONE_11_PRO, IPHONE_12, IPHONE_12_PRO,IPHONE_13, IPHONE_13_PRO, IPHONE_14, IPHONE_14_PRO, IPHONE_15, IPHONE_15_PRO];
console.log(STOCK)

const carrito = [];

const carritoJSON = JSON.stringify(carrito);


localStorage.setItem("carrito", carritoJSON);


const carritoRecuperado = localStorage.getItem("carrito");


const carritoObjeto = JSON.parse(carritoRecuperado);

//-------------


//Modificar DOM

const CONTENEDOR_PRODUCTOS = document.getElementById("contenedorProductos");


//-------------


//Funcion para mostrar el stock

const MOSTRAR_PRODUCTOS = () =>{
    STOCK.forEach(producto=>{
        const card =  document.createElement("div")
        card.innerHTML = 
        `
            <div class="card">
                <span class="titulo-item">${producto.nombre}</span>
                <img src="${producto.img}" class="img-item">
                <span class="precio-item">${producto.precio}</span>
                <button class="boton-item" id="boton${producto.id}">Agregar al Carrito</button>
            </div>
        `

        CONTENEDOR_PRODUCTOS.appendChild(card);

        const BOTON = document.getElementById(`boton${producto.id}`)
        BOTON.addEventListener("click", () =>{
            agregarAlcarrito(producto.id)
        });
    });
};

MOSTRAR_PRODUCTOS();


//-------------


//Funcion agrgar al carrito

const agregarAlcarrito = (id) =>{
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }
    else{
        const stock = STOCK.find(producto => producto.id === id);
        carrito.push(stock);
    }
    console.log(carrito)
}


const contenedorCarrito = document.getElementById("contenedorCarrito")
const verCarrito =  document.getElementById("verCarrito")

verCarrito.addEventListener("click", (e) =>{
    mostrarCarrito ();
})

const mostrarCarrito= () =>{
    contenedorCarrito.innerHTML= " ";

    carrito.forEach(producto=>{
        const card = document.createElement("div");
        card.innerHTML = 
        `
            <div class="card">
                <span class="titulo-item">${producto.nombre}</span>
                <img src="${producto.img}" class="img-item">
                <span class="precio-item">${producto.precio}</span>
                <button class="boton-item" id="eliminar${producto.id}">Eliminar</button>
            </div>
        `
        contenedorCarrito.appendChild(card);

        //Eliminar

        const boton =  document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", (e) =>{
            eliminarDelCarrito(producto.id)
        })
    })
}

//Funcion eliminar

const eliminarDelCarrito = (id) => {
    const indice = carrito.findIndex(producto => producto.id === id);
    carrito.splice(indice, 1)
    mostrarCarrito()
}