const input = document.getElementById("search");
const button = document.getElementById("button");
const pokemonName = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");



button.addEventListener("click", (event) => {
    const valor = input.value;
    getPokemon(valor);
});

const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((pokemon) => {
            console.log(pokemon);
            pokemonName.innerHTML = pokemon.name;
            pokemonImage.setAttribute("src", pokemon.sprites.front_default);
        }).catch((error) => {
            alert("Lo sentimos no encontramos ese pokemon")
        })
}

