import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom'

import Home from './pages/Home'
import DragonBall from './pages/Dbz.jsx'
import Pokemon from './pages/Pokedex.jsx'
import Filmes from './pages/Filmes'

function App() {
  return (
    <BrowserRouter>

      <div className="container">

        <nav className="menu">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/pokemon">Pokémon</NavLink>
          <NavLink to="/dragonball">Dragon Ball</NavLink>
          <NavLink to="/filmes">Filmes</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/dragonball" element={<DragonBall />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App