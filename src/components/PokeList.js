import React from "react";
import { Link } from "react-router-dom";

const PokeList = ({ allPokemon }) => {
  return (
    <>
      <h1>Choose your pokemon</h1>
      <ul>
        {allPokemon.map((pokemon, index) => {
          return (
            <li key={index}><Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}
            </Link></li>
          );
        })}
      </ul>
    </>
  );
};

export default PokeList;
