const input = document.getElementById("search");
const button = document.getElementById("button");
const pokemonName = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonType = document.getElementById("pokemonType")
const checkbox = document.getElementById("checkbox")

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
            //if(document.getElementById("checkbox") = false) {
                pokemonImage.setAttribute("src", pokemon.sprites.front_default);
            //}
            //if(document.getElementById("checkbox") = true) {
            //    pokemonImage.setAttribute("src", pokemon.sprites.front_shiny);
            //}
            
            pokemonNumber.innerHTML = pokemon.id;
            for(let i=0; i < pokemon.types.length; i++) {
                const pokemonTypeName = document.createElement("p");
                const pokemonTypeNameInfo = document.createTextNode(pokemon.types[i]);
                pokemonTypeName.appendChild(pokemonTypeNameInfo)
                pokemonTypeName.classList.add("pokedex__type__style")
                pokemonTypeName.appendChild("pokemonContainer")
            }
        }).catch((error) => {
            alert("Lo sentimos no encontramos ese pokemon")
        })
}

