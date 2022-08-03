
/* Clase constructora */

class productos{
    constructor (titulo,marca,caracteristicas,precio,stock,id){
        this.titulo = titulo.toUpperCase(),
        this.marca = marca,
        this.caracteristicas = caracteristicas,
        this.precio = parseFloat(precio),
        this.stock = stock,
        this.id = id
    }




    sumaIva(){

        this.precio = this.precio * 1.21;

    }


    info(){

      return "Nombre: " + this.titulo + "\n" + "Marca: " + this.marca + "\n" + "Caracteristicas: " + this.caracteristicas + "\n" + "Precio: $" + this.precio + "\n" +  "Stock: " + this.stock;

    }

    listado(){

        return this.titulo + " /" + " $" + this.precio + " /" + " Stock: " + this.stock;
        
    }

}



const productos_pesca = [];
    productos_pesca.push(new productos("Caña mosca","Redington","Caña para mosca N°8",30000,9,1243));
    productos_pesca.push(new productos("Caja para mosca (4 divisiones)","Foam","Caja para moscas con 4 divisiones. 14 x 9",4500,15,1232));
    productos_pesca.push(new productos("Reel para caña mosca","Redington","Zero Black / Sand 3-4. ",20000,7,1213));
    productos_pesca.push(new productos("Linea para mosca","Rio","Línea Hundimiento RIO INTOUCH 24 FT SINK TIP",8000,13,1224));
    productos_pesca.push(new productos("Wader Neoprene","Waterdog","Waders Neoprene Waterdog talle L",26500,6,1241));
    productos_pesca.push(new productos("Riñonera","Kunnan","Riñonera Kunnan. 4 compartimientos",5300,5,1354));



    let confirmacion = confirm("¿Desea realizar algún tipo de acción?")

    if(confirmacion == true){

     let pregunta = parseInt(prompt("Que acción desea realizar? \n 1) ¿Desea agregar un producto?. \n 2) Ver todos los productos."));

        /* Respuesta 1 */
        if(pregunta == "1"){

            ingresarNuevoProducto();

        }

        /* Respuesta 2 */
        else if(pregunta == "2"){

            alert(`Todos los productos: ${todosLosProductos()}`);

        }

    }else{

        alert("¡Hasta Luego!")
        
    }



/* Funciones */


    function todosLosProductos(){

        let todos = "";
        for (let i = 0 ; i < productos_pesca.length; i++)

        todos += "\n" + productos_pesca[i].listado()

        return todos

    }

    function nuevoProducto(){

        let nuevo = true;

        while(nuevo){
            let mensaje = "";
            let titulo = prompt("Ingresé título del producto").trim();
            let marca = prompt("Ingrese la Marca del producto").trim();
            let caracteristicas = prompt("Ingrese las Caracteristicas").trim();
            let precio = parseInt(prompt("Ingrese precio"));
            let stock = parseInt(prompt("Ingrese cantidad de Stock"));
            let id = prompt("Ingrese un ID del producto");

            if(!titulo){

                mensaje += "Ingrese un Titulo";

            }

            if(!marca){

                mensaje += "Ingrese una Marca";

            }

            if(!caracteristicas){

                mensaje += "Ingrese una Caracteristica";

            }

            if(isNaN(precio)){

                mensaje += "Ingrese un valor númerico.";

            }

            if(isNaN(stock)){

                mensaje += "Ingrese un valor númerico.";

            }

            if(!id){

                mensaje += "Ingrese una ID";

            }

            if(mensaje != ""){

                alert(mensaje);
                nuevo = confirm("¿Desea cargar nuevamente los datos?");

            }else{

                return new productos (titulo,marca,caracteristicas,precio,stock,id);

            }
        }
        
        return false;

    }

    function ingresarNuevoProducto(){

        let productoNuevo = nuevoProducto();

        if(productoNuevo){

            productos_pesca.push(productoNuevo)
            alert("Producto agregado con éxito")
        }


    }