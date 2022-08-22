
class ProductosPesca{


    productosXDefecto(){

        productos = [

            {
                "id": 1,
                "nombre": "Caña mosca",
                "marca": "Redington",
                "descripcion": "Caña para mosca N°8",
                "precio": 8858,
                "img": "caña.jpg",
            },
            {
                "id": 2,
                "nombre": "Caja para mosca (4 divisiones)",
                "marca": "Foam",
                "descripcion": "Caja para moscas con 4 divisiones. 14 x 9",
                "precio": 4500,
                "img": "caja.jpg",
            },

            {
                "id": 3,
                "nombre": "Reel para caña mosca",
                "marca": "Redington",
                "descripcion": "Zero Black / Sand 3-4.",
                "precio": 20000,
                "img": "reel.jpg",
            },
            {
                "id": 4,
                "nombre": "Linea para mosca",
                "marca": "Rio",
                "descripcion": "Línea Hundimiento RIO INTOUCH 24 FT SINK TIP",
                "precio": 8000,
                "img": "linea.jpg",
            },
            {
                "id": 5,
                "nombre": "Wader Neoprene",
                "marca": "Waterdog",
                "descripcion": "Waders Neoprene Waterdog talle L",
                "precio": 26500,
                "img": "wader.jpg",
            },
            {
                "id": 6,
                "nombre": "Riñonera",
                "marca": "Kunnan",
                "descripcion": "Riñonera Kunnan. 4 compartimientos",
                "precio": 5300,
                "img": "riñonera.jpg",
            }

        ]


        this.cargarProductos(productos);
        
        this.mostrarCarrito();
        
        this.actualizarContador();
             
    }


    storage(){ 
       
        localStorage.setItem("carrito",JSON.stringify(carrito));

    }


    cargarProductos(productos){ 
        
        const divProductos = document.querySelector("#productos");

        divProductos.innerHTML = "";

        if(productos.length > 0) {

            productos.forEach((producto) => {
    
                let prod = document.createElement("div");
                prod.setAttribute("id", "row_" + producto.id);    
        
                prod.innerHTML = `
                <div class="objeto">
                <h3>${producto.nombre}</h3>
                <img src="./imagenes/ecommerce/${producto.img}" alt="" class="imgProd-${producto.id}}">
                <p class="marcaProducto">Marca: ${producto.marca}</p>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <a href="javascript:addCarrito(${producto.id})"><button id="botonCarrito">Añadir al carrito</button></a>
                </div>
                `;
    
                divProductos.appendChild(prod);

            })
            
        } 
      
    }


    agregaCarrito(prodI){
        
        
       const prodEx = carrito.some( producto => producto.id === prodI.id );

       if(prodEx){
          
           const articulos = carrito.map( producto => {

               if(producto.id === prodI.id){

                   producto.cantidad++;

                   return producto;
                   
               }
               
               else{

                   return producto;

               }
         

           })

            alert("Agregado nuevamente");
    
       }

       else{
           carrito.push(prodI);
          alert("Agregado");

       }

       this.actualizarCarrito();
    }


    contarProductos(){

        let contadorProductos = 0;

        carrito.forEach((producto) => {

            contadorProductos = contadorProductos + parseInt(producto.cantidad);
        })

        return contadorProductos;
    }


    actualizarCarrito(){

        
        this.actualizarContador();

        
        this.mostrarCarrito();

        
        this.storage();

        
    }


    actualizarContador(){ 

        let totalArticulos = this.contarProductos();

        let countCarrito = document.querySelector("#badgeCarrito");

        countCarrito.innerHTML = totalArticulos;

    }


    mostrarCarrito(){ 

        let detalleCarrito = document.querySelector("#idCarrito");
    
        detalleCarrito.innerHTML = '';

        let total = 0;

        carrito.forEach((producto) => {
           

            const row = document.createElement("div");
            row.classList.add("row");
            
            total += parseInt(producto.precio);

            row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${producto.img}" width="80"/>
                        </div>
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${producto.nombre}
                        </div>
                        <div class="col-3 d-flex align-items-center justify-content-start p-2 border-bottom">
                            $ ${producto.precio}
                        </div>
                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${producto.cantidad}
                        </div>
                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                            <a href="javascript:eliminar(${producto.id})">
                            <i class="fa-solid fa-trash" id="botonEliminar"></i>
                            </a>
                        </div>`;
    
            
            detalleCarrito.appendChild(row);

        })

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


    eliminarArticulo(id) { 

        carrito = carrito.filter(producto => producto.id != id);
        this.actualizarCarrito();
            
    }


}