let productos_pesca = new Array ();

let errores = document.getElementById("errores");

let productosTienda = document.getElementById("productosTienda")

let cargar_datos = document.getElementById("cargar_datos");

cargar_datos.addEventListener("click",()=>{

    if(validacion()){

            crearProducto();


    }



});

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

    productos_pesca.push (nuevoProducto);

    crearCaja(nuevoProducto);
}

function crearCaja(nuevoProducto){

    let nuevoDiv = document.createElement("div");
    let nuevoH3 = document.createElement("h3");
    nuevoDiv.id = "div"+nuevoProducto.nombre+nuevoProducto.foto;
    nuevoH3.textContent = nuevoProducto.titulo;
    
    let nuevaImagen = document.createElement("img");
    nuevaImagen.src = nuevoProducto.foto;

    let nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = ("Ver más");
    nuevoBoton.setAttribute("class","cta")

    nuevoDiv.appendChild(nuevoH3);
    nuevoDiv.appendChild(nuevaImagen);
    nuevoDiv.appendChild(nuevoBoton);


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

function crearBoton(){

    let crearFuncion1 = document.createElement("button")
    crearFuncion1 = document.classList.add("cta")
    crearBoton.appendChild(crearFuncion1)
}