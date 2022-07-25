

function seisCuotas (precioLinterna, seis){
    return precioLinterna / seis
}

function doceCuotas (precioLinterna, doce){
    return precioLinterna / doce
}

const precioLinterna = 6000;
let seis = 6;
let doce = 12;
let cuotas = prompt("Está a punto de comprar Linterna Táctica a un precio de $6000. ¿Desea 6 o 12 cuotas?");
let resultadoSeis = seisCuotas (precioLinterna, seis);
let resultadoDoce = doceCuotas (precioLinterna, doce);

if (cuotas == 6) {
    let cantidadSeisCuotas = confirm("Desea escoger 6 cuotas?")
    alert ("Usted ha elegido " + seis + " cuotas del producto a comprar. Con un total de " + resultadoSeis + " por mes")
}

else if(cuotas == 12){
        let cantidadDoceCuotas = confirm("Desea escoger 12 cuotas?")
        alert ("Usted ha elegido " + doce + " cuotas del producto a comprar. Con un total de " + resultadoDoce + " por mes")
}

else{
    alert ("Por favor, seleccione la cantidad de cuotas que desee")
}

