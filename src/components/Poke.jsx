import axios from 'axios'
import { useState } from 'react'

function Poke() {

  const [nome, setNome] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function buscarPokemon() {

    if (!nome.trim()) {
      setErro('Informe o nome de um Pokemon!')
      return
    }

    try {

      setCarregando(true)
      setErro('')
      setPokemon(null)

      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nome.toLowerCase().trim()}`
      )

      setPokemon(resposta.data)

   } catch (error) {

      setErro('Pokemon não encontrado!')

    } finally {

      setCarregando(false)

    }
  }


  return (

      <main className="pokedex">

      <h2>Minha Pokédex - Deploy automatico </h2>
   
      <div className="pesquisa">

        <input
          type="text"
          placeholder="Digite o nome do Pokemon"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button onClick={buscarPokemon}>
          Buscar
        </button>

 </div>
      

      {carregando && <p>Buscando Pokemon...</p>}

     

      {erro && <p className="erro">{erro}</p>}

      

      {pokemon && (

        <div className="pokemon-card">

          <h2>{pokemon.name.toUpperCase()}</h2>

          <p>#{String(pokemon.id).padStart(3, '0')}</p>

          <img
            src={
              pokemon.sprites.other['official-artwork'].front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
          />

          <p>
            Tipo: {pokemon.types.map((item) => item.type.name).join(' / ')}
          </p>

          <p>Altura: {pokemon.height / 10} m</p>

          <p>Peso: {pokemon.weight / 10} kg</p>

        </div>

    
      )}
      
      
    </main>
    );
}
        
    export default Poke; 