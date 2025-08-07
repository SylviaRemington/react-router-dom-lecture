import { useParams } from 'react-router';

const PokemonDetails = ({pokemon}) => {
    const { pokemonId } = useParams();
    console.log({'all-pokemon': pokemon, pokemonId});

    const singlePokemon = pokemon.find((poke) => poke._id === Number (pokemonId));
    console.log(singlePokemon);

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd></dd>
        <dt>Height:</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
