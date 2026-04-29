import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <nav className="navbar">
        <h2 className="logo">Pokedex</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <div className="about-container">
        <p>
          This project is a Pokédex built using React. It allows users to browse
          Pokémon, view their details, and navigate through pages using data
          from the PokéAPI.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Browse Pokémon with pagination</li>
          <li>View detailed Pokémon information</li>
          <li>Dynamic routing with React Router</li>
          <li>Responsive card-based design</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>PokéAPI</li>
          <li>React Router</li>
        </ul>

        <h2>How to Use</h2>
        <p>
          Navigate to the Pokédex page to browse Pokémon. Click on any Pokémon
          to see detailed stats and information.
        </p>

      </div>
    </div>
  );
}

export default About;
