import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <div className={`detail-card ${pokemon.types[0].type.name}`}>
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>{pokemon.name}</h1>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />

        <div className="info">
          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>

          <p>
            <strong>Types:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>

          <p>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
