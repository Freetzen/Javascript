let carrito = [];
let productos = [];
let global;

let url = "./scripts/json/productos.json";

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  global = new ProductosPesca();
  global.productosXDefecto();
});

function addCarrito(id) {
  const prod = document.querySelector("#row_" + id);
  let producto = new Producto(
    id,
    prod.querySelector("h3").textContent,
    prod.querySelector(".precio").textContent.substring(1, 6),
    prod.querySelector("img").src
  );

  global.agregaCarrito(producto);
}

function eliminar(id) {
  global.eliminarArticulo(id);
}
