
let formularioChallwan = new Array ();

let errores = document.getElementById("errores");

let cargar_datos = document.getElementById("enviarForm");


cargar_datos.addEventListener("click",()=>{

    if(validacion()){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Consulta enviada !!',
            showConfirmButton: false,
            timer: 1500
            
          })

        restaurar()

    }



});




function validacion(){

    errores.innerHTML = "";

    let input_nombre = document.getElementById("nombre").value;
    let input_apellido = document.getElementById("apellido").value;
    let input_mail = document.getElementById("mail").value;
    let input_consulta = document.getElementById("consulta").value;


    let avisosMensajes = new Array();
    
    if(!input_nombre){
        
        avisosMensajes.push("Ingrese un Titulo.");


    }

    if(!input_apellido){

        avisosMensajes.push("Ingrese una Marca.");


    }

    if(!input_mail){

        avisosMensajes.push("Ingrese un correo.");


    }

    if(!input_consulta){

        avisosMensajes.push("Ingrese una consulta.");


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

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let consulta = document.getElementById("consulta").value;



    let nuevoformulario = new Formulario (nombre,apellido,mail,consulta);

    formularioChallwan.push(nuevoformulario);

}

function storageForm(){

    localStorage.setItem("formularios", JSON.stringify(formularioChallwan));

}

function restaurar(){

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("consulta").value = "";

}