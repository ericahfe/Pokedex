const input = document.getElementById("search");
const button = document.getElementById("button");
const pokemonName = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonType = document.getElementById("pokemonType")


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
            pokemonNumber.innerHTML = pokemon.id;
            pokemonType.innerHTML = pokemon.types.type.name;
        }).catch((error) => {
            alert("Lo sentimos no encontramos ese pokemon")
        })
}

