import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = ({allPokemon}) => {
    console.log(allPokemon)
    var {pokemonName} = useParams()
    const pokemon = allPokemon.find(pokeboi => pokeboi.name === pokemonName )
    
    return (
        <>
        <h1>Pokemon</h1>
        <p>{pokemon.name}</p>

        </>
    )
}

export default Pokemon;