const saludito = prompt("¿Como es tu nombre?").toLocaleUpperCase();

document.querySelector('.achedos').textContent = `Hola ${saludito}!!`;