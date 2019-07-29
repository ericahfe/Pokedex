const input = document.getElementById("search");
const button = document.getElementById("button");
const pokemonName = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonType = document.getElementById("pokemonType");
const showShiny = document.getElementById("showShiny");

button.addEventListener("click", (event) => {
    const valor = input.value;
    getPokemon(valor);
});

const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((pokemon) => {
            console.log(pokemon);
            pokemonNumber.innerHTML = pokemon.id;
            pokemonName.innerHTML = pokemon.name;

            if (showShiny.checked == true) {
                pokemonImage.setAttribute("src", pokemon.sprites.front_shiny);
            } else {
                pokemonImage.setAttribute("src", pokemon.sprites.front_default);
            }


            const pokemonTypes = pokemon.types; // arreglo del tipo de pokemon

            for (let i = 0; i < pokemonTypes.length; i++) {
                const pokemonTypeName = document.createElement("p");
                const pokemonTypeNameInfo = document.createTextNode(pokemonTypes[i].type.name);
                pokemonTypeName.appendChild(pokemonTypeNameInfo);
                pokemonTypeName.classList.add("pokedex__type");
                pokemonTypeName.classList.add(`pokedex__type--${pokemonTypes[i].type.name}`);
                pokemonType.appendChild(pokemonTypeName);

            }
        })
}


const getEvolutions = (pokemonID) => {

}
