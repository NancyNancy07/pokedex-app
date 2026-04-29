import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Pokedex() {
  // State
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const navigate = useNavigate();

  // Fetch data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        const detailed = await Promise.all(
          data.results.map((p) => fetch(p.url).then((res) => res.json())),
        );

        setPokemon(detailed);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      });
  }, [url]);

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
        <button disabled={!prevUrl} onClick={() => setUrl(prevUrl)}>
          Previous
        </button>

        <button disabled={!nextUrl} onClick={() => setUrl(nextUrl)}>
          Next
        </button>
      </div>

      {/* Pokémon list */}
      <div className="grid">
        {pokemon.map((p) => {
          const type = p.types[0].type.name;

          return (
            <div
              key={p.name}
              className={`card ${type}`}
              onClick={() => navigate(`/pokemon/${p.id}`)}
            >
              <p>#{p.id}</p>
              <h2>{p.name}</h2>

              <img src={p.sprites.front_default} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pokedex;
