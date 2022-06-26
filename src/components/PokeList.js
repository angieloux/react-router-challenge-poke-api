import React from "react";
import { Link } from "react-router-dom";

const PokeList = ({ allPokemon }) => {
  console.log(allPokemon);
  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {allPokemon.map((pokemon, index) => {
          return (
            <Link to="/"><li key={index}>{pokemon.name}</li></Link>
          )
        })}
      </ul>
    </>
  );
};

export default PokeList;
