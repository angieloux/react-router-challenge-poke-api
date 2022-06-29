export const getPokemonImage = async (selectedPokemon, callback) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`, {headers: {'Accept':'application/json'}})
    .then(data => data.json())
    .then(data => {
       callback && callback(data.sprites.back_default)
    })
    .catch(error => console.log(error));
}