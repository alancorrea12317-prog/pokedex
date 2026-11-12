function Poke({ pokemon,nome, setNome, buscarPokemon, carregando, erro }) {



  return (
   

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
      
      </div>
    );
}
        
    export default Poke; 