class ProductosPesca {
  productosXDefecto() {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        productos = resultado.productos;

        this.cargarProductos(productos);
      });

    this.actualizarCarrito();

    this.actualizarContador();

    this.finalizarCompra();
  }
  /* Almacenar carrito */
  storage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  /* Productos en la web */
  cargarProductos(productos) {
    const divProductos = document.querySelector("#productos");

    divProductos.innerHTML = "";

    if (productos.length > 0) {
      productos.forEach((producto) => {
        const { id, nombre, marca, descripcion, precio, img, cantidad } =
          producto;
        let prod = document.createElement("div");
        prod.setAttribute("id", "row_" + producto.id);

        prod.innerHTML = `
                <div class="objeto">
                <h3>${nombre}</h3>
                <img src="./imagenes/ecommerce/${img}" alt="" class="imgProd-${id}}">
                <p class="marcaProducto">Marca: ${marca}</p>
                <p>${descripcion}</p>
                <p class="precio">$${precio}</p>
                <a href="javascript:addCarrito(${id})"><button id="botonCarrito">Añadir al carrito</button></a>
                </div>
                `;

        divProductos.appendChild(prod);
      });
    }
  }

  agregaCarrito(prodI) {
    const prodEx = carrito.some((producto) => producto.id === prodI.id);

    if (prodEx) {
      const articulos = carrito.map((producto) => {
        if (producto.id === prodI.id) {
          producto.cantidad++;

          return producto;
        } else {
          return producto;
        }

        carrito = articulos;
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Agregado Nuevamente.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      carrito.push(prodI);

      Toastify({
        text: "Producto Agregado.",
        offset: {
          x: 80,
          y: 20,
        },
      }).showToast();
    }

    this.actualizarCarrito();
  }

  contarProductos() {
    let contadorProductos = 0;

    carrito.forEach((producto) => {
      contadorProductos += parseInt(producto.cantidad);
    });

    return contadorProductos;
  }

  actualizarCarrito() {
    this.actualizarContador();
    this.mostrarCarrito();
    this.storage();
  }
  /* Actualiza el contador de productos */
  actualizarContador() {
    let totalArticulos = this.contarProductos();

    let countCarrito = document.querySelector("#badgeCarrito");

    countCarrito.innerHTML = totalArticulos;
  }
  /* Visualizamos cambios en carrito */
  mostrarCarrito() {
    let detalleCarrito = document.querySelector("#idCarrito");

    detalleCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((producto) => {
      const { id, nombre, marca, descripcion, precio, img, cantidad } =
        producto;

      const row = document.createElement("div");
      row.classList.add("row");

      total += parseInt(precio) * cantidad;

      row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="75"/>
                        </div>
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${nombre}
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-start p-2 border-bottom">
                            $ ${precio}
                        </div>
                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${cantidad}
                        </div>
                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                            <a href="javascript:eliminar(${id})">
                            <i class="fa-solid fa-trash" id="botonEliminar"></i>
                            </a>
                        </div>`;

      detalleCarrito.appendChild(row);
    });

    let row = document.createElement("div");
    row.classList.add("row");

    row.innerHTML = `   
                        <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                            Total a pagar:
                        </div>

                        <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                            <b>$ ${total}</b>
                        </div>`;

    detalleCarrito.appendChild(row);
  }
  /* Eliminar Articulos */
  eliminarArticulo(id) {
    Swal.fire({
      title: '"Esta seguro de eliminar el producto ?"',
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#719f41",
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (!result.isConfirmed) {
        Toastify({
          text: "No se ha eliminado.",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      } else {
        carrito = carrito.filter((articulo) => articulo.id != id);
        this.actualizarCarrito();

        Toastify({
          text: "Producto eliminado.",
          offset: {
            x: 50,
            y: 10,
          },
        }).showToast();
      }
    });
  }
  /* Botón de finalizar compra */
  finalizarCompra() {
    let botonFinalizar = document.getElementById("botonFinalizar");
    let detalleCarrito = document.querySelector("#idCarrito");
    let countCarrito = document.querySelector("#badgeCarrito");

    botonFinalizar.addEventListener("click", () => {
      localStorage.clear();
      detalleCarrito.innerHTML = "";
      countCarrito.innerHTML = 0;

      swal.fire({
        icon: "success",
        confirmButtonColor: "#719f41",
        title: "Gracias por comprar en nuestra tienda!!",
        text: "Nos pondremos en contacto",
      });
    });
  }
}
