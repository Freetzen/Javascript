
/* Clase constructora */

class Productos{
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