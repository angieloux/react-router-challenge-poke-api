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
import {getPokemon} from './utils/services'


const App = () => {

  const [allPokemon, setAllPokemon] = useState([])
// const [pokemon, setPokemon] = useState([])

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
          <Route path="/" index element={<Home/>} />
          <Route path="pokeList" element={<PokeList allPokemon={allPokemon}/>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
