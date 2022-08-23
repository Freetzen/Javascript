

let carrito = [];
let productos = [];
let global;


/* Al cargar la web. */
document.addEventListener('DOMContentLoaded',() =>{

    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    global = new ProductosPesca();
    global.productosXDefecto();

})


/* Agregar articulos */
function addCarrito(id) {
    
    const prod = document.querySelector('#row_' + id);
    let producto = new Producto(   
        id,
        prod.querySelector("h3").textContent,
        prod.querySelector(".precio").textContent.substring(1,6),
        prod.querySelector("img").src
    );
                                
    global.agregaCarrito(producto);
}


/* Eliminar carrito */
function eliminar(id) {   
    global.eliminarArticulo(id);
}





