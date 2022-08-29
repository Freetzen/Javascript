const form = document.querySelector(".clima2 form");
const input = document.querySelector(".clima2 input");
const msg = document.querySelector(".clima2 .msg");
const lista = document.querySelector(".ciudadBuscada .ciudades");

const Api = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", bot => {
    
    bot.preventDefault();
  let inputVal = input.value;

  const listaItems = lista.querySelectorAll(".ciudadBuscada .ciudad");
  const listaItemsArray = Array.from(listaItems);

  if (listaItemsArray.length > 0) {

    const filtrandoArray = listaItemsArray.filter(ele => {

      let contenido = "";

      if (inputVal.includes(",")) {

        if (inputVal.split(",")[1].length > 2) {

          inputVal = inputVal.split(",")[0];
          contenido = ele
            .querySelector(".nombreCiudad span")
            .textContent.toLowerCase();

        } 
        else {

            contenido = ele.querySelector(".nombreCiudad").dataset.name.toLowerCase();

        }

    } 
      
      else {

        contenido = ele.querySelector(".nombreCiudad span").textContent.toLowerCase();

      }

      return contenido == inputVal.toLowerCase();

    });

    if (filtrandoArray.length > 0) {

      msg.innerHTML = `<p class="consultaste">Ya consultaste por ${filtrandoArray[0].querySelector(".nombreCiudad span").textContent}. Por favor, seleccione otra ciudad.</p>`;

      form.reset();
      input.focus();

      return;

    }

  }


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${Api}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icono = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

      const div = document.createElement("div");
      div.classList.add("ciudad");

      const busqueda = `
      <div class="busquedaCiudad">
        <h2 class="nombreCiudad" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>

        <div class="temperaturaCiudad">${Math.round(main.temp)}<sup>°C</sup></div>

        <figure>
          <img class="iconoCiudad" src="${icono}" alt="${weather[0]["description"]}">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        </div>`;

        div.innerHTML = busqueda;

      lista.appendChild(div);

    })

    .catch(() => {

      msg.innerHTML = `<p class="consultaste">Por favor, ingrese una ciudad.</p>`;

    });

  msg.innerHTML = "";

  form.reset();
  input.focus();

});