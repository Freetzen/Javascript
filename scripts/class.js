
/* Clases constructoras */

class Producto{

    constructor (id,nombre,precio,img,marca,descripcion){
      
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.img = img,
        this.marca = marca,
        this.descripcion = descripcion,
        this.cantidad = 1;
    }

}


class Formulario{

    constructor(nombre,apellido,mail,consulta){

        this.nombre = nombre,
        this.apellido = apellido,
        this.mail = mail,
        this.consulta = consulta
    }

}