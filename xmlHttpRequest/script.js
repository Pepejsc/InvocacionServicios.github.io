function getResults() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://rickandmortyapi.com/api/character", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  };
  xhr.send();
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
