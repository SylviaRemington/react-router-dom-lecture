import { useParams } from 'react-router';

const PokemonDetails = ({pokemon}) => {
    const { pokemonId } = useParams();
    // console.log({'all-pokemon': pokemon, pokemonId});
    // console.log(typeof pokemonId);

    const singlePokemon = pokemon.find((poke) => poke._id === Number (pokemonId));
    // console.log(singlePokemon);

    if (!singlePokemon) {
        return <p>No pokemon of that ID</p>;
    }

  return (
    <>
      <h2>Pokemon Details: {singlePokemon.name} </h2>
      <dl>
        <dt>Weight: {singlePokemon.weight}</dt>
        <dd></dd>
        <dt>Height: {singlePokemon.height}</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
