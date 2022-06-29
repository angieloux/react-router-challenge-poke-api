import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getPokemonImage } from '../utils/image'

const Pokemon = ({allPokemon}) => {
    const [pokemonImage, setPokemonImage] = useState('')
        var {pokemonURL} = useParams()
        const pokemonName = allPokemon.find(pokeboi => pokeboi.name === pokemonURL )
        const pokemon = pokemonName.name
    useEffect(() => {
        getPokemonImage(pokemon, setPokemonImage)
    },[pokemon])

    return (
        <>
        <h1>{pokemon}</h1>
        <img src={pokemonImage} alt={`${pokemon}`}/>

        </>
    )
}

export default Pokemon;