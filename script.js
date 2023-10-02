document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const pokemonInfo = document.getElementById("pokemonInfo");

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();

     fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
         .then((response) => response.json())
         .then((data) => {
             pokemonInfo.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height} decímetros</p>
                <p>Peso: ${data.weight} hectogramos</p>
            `;
         })
         .catch((error) => {
            pokemonInfo.innerHTML = `<p>Pokémon no encontrado.</p>`;
        });
    });
});