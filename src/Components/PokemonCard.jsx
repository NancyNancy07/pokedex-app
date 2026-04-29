function PokemonCard({ pokemon, onClick }) {
  const type = pokemon.types[0].type.name;

  return (
    <div className={`card ${type}`} onClick={onClick}>
      <p>#{pokemon.id}</p>
      <h2>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}

export default PokemonCard;