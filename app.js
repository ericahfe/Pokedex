const input = document.getElementById("search");
const button = document.getElementById("button");


function find () {
    document.getElementById()
}
input.addEventListener("input", (event) => { 
button.click

const pokemon = event.target.value;
who_is_that_pokemon_info(pokemon);

});
const who_is_that_pokemon_info = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        .then((response) => response.json())

        .then((call_pokemon) => {
            console.log(call_pokemon);

        }
        );

}

