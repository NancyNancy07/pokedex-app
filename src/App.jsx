import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import About from "./pages/About";
import PokemonDetail from "./pages/PokemonDetail";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/pokedex-app">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
