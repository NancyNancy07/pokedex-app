import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {
  // State
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 20;
  const navigate = useNavigate();

  // Fetch data
  useEffect(() => {
    const offset = page * limit;

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then(async (data) => {
        const detailed = await Promise.all(
          data.results.map((p) => fetch(p.url).then((res) => res.json())),
        );

        setPokemon(detailed);
      });
  }, [page, limit]);

  return (
    <div>
      <h1>Pokedex</h1>

      <nav className="navbar">
        <h2 className="logo">Pokedex</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* Pagination buttons */}

      <div className="pagination">
        <button
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>

      {/* Pokémon list */}
      <div className="grid">
        {pokemon.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            onClick={() => navigate(`/pokemon/${p.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
