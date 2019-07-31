const input = document.getElementById("search");
const button = document.getElementById("button");
const pokemonName = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonType = document.getElementById("pokemonType");
const showShiny = document.getElementById("showShiny");
const pokemonHeight = document.getElementById("pokemonHeight")
const pokemonWeight = document.getElementById("pokemonWeight")
const evolutionName1 = document.getElementById("evolutionName1")
const evolutionImg1 = document.getElementById("evolutionImg1")
button.addEventListener("click", (event) => {
    const valor = input.value;
    getPokemon(valor);
    getEvolutions(valor);
});

const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => response.json())
        .then((pokemon) => {
            console.log(pokemon);
            pokemonNumber.innerHTML = pokemon.id;
            pokemonName.innerHTML = pokemon.name;
            
            pokemonHeight.innerHTML = pokemon.height;
            pokemonWeight.innerHTML = pokemon.weight;

            if (showShiny.checked == true) {
                pokemonImage.setAttribute("src", pokemon.sprites.front_shiny);
            } else {
                pokemonImage.setAttribute("src", pokemon.sprites.front_default);
            }

            
            const getEvolutions = (pokemonID) => {
                fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonID}`)
                .then((response) => response.json())
                .then((pokemonID) => {
                    console.log(pokemonID);
                    evolutionName1.innerHTML = pokemonID.baby_trigger_item
                    }
                )}
            

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


    