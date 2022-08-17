
/* Clase constructora */

class Productos{
    constructor (titulo,marca,caracteristicas,precio,stock,id,foto){
        this.titulo = titulo.toUpperCase(),
        this.marca = marca,
        this.caracteristicas = caracteristicas,
        this.precio = parseFloat(precio),
        this.stock = stock,
        this.id = id,
        this.foto = foto
    }


    
    info(){

      return "Nombre: " + this.titulo + "\n" + "Marca: " + this.marca + "\n" + "Caracteristicas: " + this.caracteristicas + "\n" + "Precio: $" + this.precio + "\n" +  "Stock: " + this.stock;

    }



}