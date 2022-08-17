
//Arreglo de productos

let productos = [

            {
                "titulo": "Caña mosca",
                "marca": "Redington",
                "caracteristicas": "Caña para mosca N°8",
                "precio": 30000,
                "stock": 9,
                "id": 1,
                "foto": "caña.jpg",
            },
            {
                "titulo": "Caja para mosca (4 divisiones)",
                "marca": "Foam",
                "caracteristicas": "Caja para moscas con 4 divisiones. 14 x 9",
                "precio": 4500,
                "stock": 15,
                "id": 2,
                "foto": "caja.jpg",
            },

            {
                "titulo": "Reel para caña mosca",
                "marca": "Redington",
                "caracteristicas": "Zero Black / Sand 3-4.",
                "precio": 20000,
                "stock": 7,
                "id": 3,
                "foto": "reel.jpg",
            },
            {
                "titulo": "Linea para mosca",
                "marca": "Rio",
                "caracteristicas": "Línea Hundimiento RIO INTOUCH 24 FT SINK TIP",
                "precio": 8000,
                "stock": 13,
                "id": 4,
                "foto": "linea.jpg",
            },
            {
                "titulo": "Wader Neoprene",
                "marca": "Waterdog",
                "caracteristicas": "Waders Neoprene Waterdog talle L",
                "precio": 26500,
                "stock": 6,
                "id": 5,
                "foto": "wader.jpg",
            },
            {
                "titulo": "Riñonera",
                "marca": "Kunnan",
                "caracteristicas": "Riñonera Kunnan. 4 compartimientos",
                "precio": 5300,
                "stock": 5,
                "id": 6,
                "foto": "riñonera.jpg",
            }
        ]

        

/* Agregar Objetos del Array "productos" a la web */
    productos.forEach((producto) =>{
    const contenedorDiv = document.getElementById("productosTienda");
        let crearContenedor = document.createElement('div');
        crearContenedor.innerHTML = `
        <div class="objeto">
        <h3>${producto.titulo}</h3>
        <img src="./imagenes/ecommerce/${producto.foto}" alt="">
        <p>Marca: ${producto.marca}</p>
        <p>${producto.caracteristicas}</p>
        <p>Stock: ${producto.stock}</p>
        <p>Precio: $${producto.precio}</p>
        <button>Añadir al carrito</button>
        </div>
        `
        contenedorDiv.appendChild(crearContenedor); 
    })


/* Agregar Producto */

let productos_pesca = new Array ();

let errores = document.getElementById("errores");

let productosTienda = document.getElementById("productosTienda")

let cargar_datos = document.getElementById("cargar_datos");

let enterProducto = document.getElementById("rutaFoto");




let registrado = prompt("ya estas registrado? si no lo estas, escribe 'no'");
if (registrado == "no") {

    let buenas = "bienvenido " + prompt("Como es tu nombre?");

    localStorage.setItem("lista", JSON.stringify(buenas)); /* "lista" es una key a llamar en getItem, esto guarda la respuesta del prompt de arriba */


} else {
    alert(localStorage.getItem("lista"))
}




cargar_datos.addEventListener("click",()=>{

    if(validacion()){

            crearProducto();


    }



});

enterProducto.addEventListener("keypress",(event)=>{

    if (event.keyCode === 13){

        let dato = enterProducto.value;
        crearProducto(dato);
        newProducto.value = "";


    }


})



function validacion(){

    errores.innerHTML = "";

    let input_titulo = (document.getElementById("tituloProducto").value).toUpperCase();
    let input_marca = document.getElementById("marcaProducto").value;
    let input_caracteristicas = document.getElementById("caracteristicasProducto").value;
    let input_precio = document.getElementById("precioProducto").value;
    let input_stock = document.getElementById("stockProducto").value;
    let input_id = document.getElementById("idProducto").value;
    let input_foto = document.getElementById("rutaFoto").value;

    let avisosMensajes = new Array();
    
    if(!input_titulo){
        
        avisosMensajes.push("Ingrese un Titulo.");


    }

    if(!input_marca){

        avisosMensajes.push("Ingrese una Marca.");


    }

    if(!input_caracteristicas){

        avisosMensajes.push("Ingrese una Caracteristica.");


    }

    if(!input_precio || input_precio <= 0){

        avisosMensajes.push("Ingrese un Precio.");


    }

    if(!input_stock || input_stock <= 0){

        avisosMensajes.push("Ingrese cantidad de Stock.");


    }

    if(!input_id){

        avisosMensajes.push("Ingrese un ID del producto.");


    }

    if(!input_foto){

        avisosMensajes.push("Ingrese una ruta de imagen.");


    }

    if(avisosMensajes.length>0){

        let lista = document.createElement("ul");
        lista.textContent = "No ha sido posible cargar los datos";

        avisosMensajes.forEach(informacion => {

            lista.appendChild(crearLista(informacion));
        })

        errores.appendChild(lista);

    }


    
  return avisosMensajes.length == 0;

}


function crearLista(informacion){

    let li = document.createElement("li");
    li.textContent = informacion;
    return li;

}


function  crearProducto(){

    let titulo = document.getElementById("tituloProducto").value;
    let marca = document.getElementById("marcaProducto").value;
    let caracteristicas = document.getElementById("caracteristicasProducto").value;
    let precio = document.getElementById("precioProducto").value;
    let stock = document.getElementById("stockProducto").value;
    let id = document.getElementById("idProducto").value;
    let foto = document.getElementById("rutaFoto").value;



    let nuevoProducto = new Productos (titulo,marca,caracteristicas,precio,stock,id,foto);

    guardar_usuario(nuevoProducto);

    /* productos_pesca.push (nuevoProducto); */

    crearCaja(nuevoProducto);
}


function crearCaja(nuevoProducto){

    let nuevoDiv = document.createElement("div");


    let nuevoH3 = document.createElement("h3");
    nuevoDiv.id = "div"+nuevoProducto.nombre+nuevoProducto.foto;
    nuevoH3.textContent = nuevoProducto.titulo;

    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = nuevoProducto.foto;

    let nuevaMarca = document.createElement("p")
    nuevaMarca.textContent = (`Marca: ${nuevoProducto.marca}`)

    let nuevaCaracteristicas = document.createElement("p")
    nuevaCaracteristicas.textContent = (nuevoProducto.caracteristicas)

    let nuevoStock = document.createElement("p");
    nuevoStock.textContent = (`Stock: ${nuevoProducto.stock}`)

    let nuevoPrecio = document.createElement("p")
    nuevoPrecio.textContent = (`Precio: $${nuevoProducto.precio}`)

    let NuevoBoton = document.createElement("button");
    NuevoBoton.innerHTML = `<button>Añadir al carrito</button>`

    nuevoDiv.appendChild(nuevoH3);
    nuevoDiv.appendChild(nuevaImagen);
    nuevoDiv.appendChild(nuevaMarca);
    nuevoDiv.appendChild(nuevaCaracteristicas);
    nuevoDiv.appendChild(nuevoStock);
    nuevoDiv.appendChild(nuevoPrecio);
    nuevoDiv.appendChild(NuevoBoton);

    productosTienda.appendChild(nuevoDiv);

    restaurar()

}


function restaurar(){

    document.getElementById("tituloProducto").value = "";
    document.getElementById("marcaProducto").value = "";
    document.getElementById("caracteristicasProducto").value = "";
    document.getElementById("precioProducto").value = "";
    document.getElementById("stockProducto").value = "";
    document.getElementById("idProducto").value = "";
    document.getElementById("rutaFoto").value = "";

}

