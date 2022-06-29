import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./components/Home";
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";
import {getPokemon} from './utils/services'


const App = () => {

  const [allPokemon, setAllPokemon] = useState([]) 

useEffect(() => {
  getPokemon(setAllPokemon)
},[])

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="pokeList">Poke list</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/pokemon/:pokemonName" element={<Pokemon allPokemon={allPokemon}/>} />
          <Route path="/" index element={<Home/>} />
          <Route path="pokeList" element={<PokeList allPokemon={allPokemon}/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
