import { HashRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import PokemonDetail from "./pages/PokemonDetail";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;