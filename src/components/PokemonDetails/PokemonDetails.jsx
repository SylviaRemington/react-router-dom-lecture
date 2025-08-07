import { useParams } from 'react-router';

const PokemonDetails = (props) => {
    const params = useParams();
    console.log('Params are: ', params.pokemonId);

  // Always verify that any props are being passed correctly!
//   console.log(props); 

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
