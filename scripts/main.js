/* Bienvenido */

let bienvenida = prompt("Bienvenido a la página oficial de Challwan. Para continuar escriba: 'continuar'");

while(bienvenida != "continuar") {
    alert("ingresaste " + bienvenida);
    bienvenida = prompt("Bienvenido a la página oficial de Challwan. Para continuar escriba: 'continuar'")
}

/* Productos */

let productos = prompt("En nuestra página encontrarás prodcutos sobre pesca. Escriba 'ok' si desea continuar");
while(productos != "ok") {
    alert("ingresaste " + productos);
    productos = prompt("En nuestra página encontrarás prodcutos sobre pesca. Escriba 'ok' si desea continuar");
}

/* Edad */

const anio_actual = 2022;

let anio_nacimiento = parseInt(prompt("Ingrese su fecha de nacimiento"));

if(isNaN(anio_nacimiento)){
    alert("No ingresaste una año")
}

else{

    let edad = anio_actual - anio_nacimiento;

    alert("Tu edad es: " + edad)

    if(edad < 18){
        alert("Eres menor de edad, no puedes ingresar a la web")
    }
    
    else{
        alert("Bienvenido a la web de CHALLWAN")
    }
}
