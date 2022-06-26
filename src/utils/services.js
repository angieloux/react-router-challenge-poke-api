

export const getPokemon = async (callback) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon`, {headers: {'Accept':'application/json'}})
    .then(data => data.json())
    .then(data => {
       callback && callback(data.results)
    })
    .catch(error => console.log(error));
    
}