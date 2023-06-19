//función de invocación usando la API Fetch de forma asincrona
function getResults() {
  fetch("https://rickandmortyapi.com/api/character")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error en la respuesta de la API");
      }
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

//funcion para conseguir los personajes de la API
function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");

  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

//dibuja los personajes que fueron obtenidos y crea la caja para que se dibuje en html
getCharacters((data) => {
  data.results.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(/*html*/ `
              <article>
                  <div class="image-container">
                      <img src="${personaje.image}" alt="imagen-personaje">
                  </div>
  
                  <h2>${personaje.name}</h2>
                  <span>${personaje.status}</span>
  
              </article>
          `);

    const main = document.querySelector("main");
    main.append(article);
  });
});
