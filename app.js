const input = document.getElementById("search");
const button = document.getElementById("button");
const pokemonName = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonType = document.getElementById("pokemonType");
const showShiny = document.getElementById("showShiny");
const pokemonHeight = document.getElementById("pokemonHeight")
const pokemonWeight = document.getElementById("pokemonWeight")
const pokemonEvolution = document.getElementById("pokemonEvolutions");
const buttonFavorite = document.getElementById("buttonFavorite");
const listOfPokemon = document.getElementById("listOfPokemon");
const findByID = document.getElementById("findByID")
let favoritePokemonList = [];

const evolutions = {
    charmander: [
        {
            evolutionName: "Charmeleon",
            evolutionImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
        },
        {
            evolutionName: "Charizard",
            evolutionImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        }
    ],
    squirtle: [
        {
            evolutionName: "wartortle",
            evolutionImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
        },
        {
            evolutionName: "blastoise",
            evolutionImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
        }
    ],
    bulbasaur: [
        {
            evolutionName: "ivysaur",
            evolutionImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        },
        {
            evolutionName: "venusaur",
            evolutionImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        }
    ]
}

button.addEventListener("click", (event) => {
    const valor = input.value;
    getPokemon(valor);

});

buttonFavorite.addEventListener("click", () => {
    favoritePokemonList.push(input.value);
    console.log(favoritePokemonList)
})

const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        .then((response) => response.json())
        .then((pokemon) => {
            console.log(pokemon);
            pokemonType.innerHTML = null;
            pokemonNumber.innerHTML = pokemon.id;
            pokemonName.innerHTML = pokemon.name;
            pokemonHeight.innerHTML = pokemon.height;
            pokemonWeight.innerHTML = pokemon.weight;
            pokemonEvolution.innerHTML = null;
            listOfPokemon.innerHTML = favoritePokemonList;
            if(findByID.checked == true) {
                input.type = "number"
            }

            if (pokemon.name.toLowerCase() == "bulbasaur") {
                for (let i = 0; i < evolutions.bulbasaur.length; i++) {
                    createPokemonEvolutions(evolutions.bulbasaur[i]);

                }
            }

            if (pokemon.name.toLowerCase() == "squirtle") {
                for (let i = 0; i < evolutions.squirtle.length; i++) {
                    createPokemonEvolutions(evolutions.squirtle[i]);
                }
            }
            if (pokemon.name.toLowerCase() == "charmander") {
                for (let i = 0; i < evolutions.charmander.length; i++) {
                    createPokemonEvolutions(evolutions.charmander[i]);
                }
            }

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
        }
        )
}



const createPokemonEvolutions = (evolution) => {
    const evolutionName = document.createElement("h4");
    const evolutionImg = document.createElement("img");
    const evolutionNameInfo = document.createTextNode(evolution.evolutionName);
    evolutionName.appendChild(evolutionNameInfo);
    pokemonEvolution.appendChild(evolutionImg)
    evolutionImg.src = evolution.evolutionImg;
    pokemonEvolution.appendChild(evolutionName)
}



// agregar una lista de pokemones favoritos cuando el usuario de clic en el boton favoritos >>
// el usuario solo debe poder ingresar valores alfabeticos 
// mostrar un checkbox que me permita ingresar solo numeros y vicerversa  >>
// adaptar la pokedex a dispositivos moviles >>
// modificar pokedex pa que se vea chingona 