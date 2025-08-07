import { useState } from 'react';
import {Routes, Route} from 'react-router';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonForm from './components/PokemonForm/PokemonForm';
import NavBar from './components/NavBar/NavBar';


//initialState is just the starting point and initial state of the function / we don't want to put stuff we don't need in the function - by putting it outside, it only loads into state once.
const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState); //initialState is the list above
  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
        {/* the path is the endpoint & the element is the Pokemon list with its initial state. */}
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path='/pokemon/:pokemonId' element={<PokemonDetails pokemon={pokemon} />} />
        <Route path='/pokemon/new' element={<PokemonForm />} />
        
        {/* New, catch-all default route */}
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;

