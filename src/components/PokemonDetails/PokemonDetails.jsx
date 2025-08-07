import { useParams } from 'react-router';

const PokemonDetails = (props) => {
    // Instead of this, const params = useParams(); , we can use destructuring which looks like:
    const { pokemonId } = useParams();

    // console.log('Params are: ', params.pokemonId);
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
