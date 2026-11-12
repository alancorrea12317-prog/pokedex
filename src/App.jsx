import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Dbz from './components/Dbz.jsx'
import Imdb from './components/Imdb.jsx'
import Poke from './components/Poke.jsx'

function App() {

 
  const [nome, setNome] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  const [personagemDbz, setPersonagemDbz] = useState({})
  const [alunoSenai, setAlunoSenai] = useState({})
  const [filmeIMDB, setFilmeIMDB] = useState({})


  async function buscaralunoSenai(){
    const aluno =  await axios.get(`https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/3`)
    const aprendiz = aluno.data
    setAlunoSenai(aprendiz)

  }

  async function buscardragonball() {
    const imagemdbz =  await axios.get(`https://dragonball-api.com/api/characters/17`)
    const personagemDbz = imagemdbz.data
    setPersonagemDbz(personagemDbz)
  }
  
 

 async function buscarFilmeIMDB() {
    const filme =  await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=90f99163`)
    const cinemaIMDB = filme.data
    setFilmeIMDB(cinemaIMDB)
  }


 useEffect(() => {
    buscardragonball()
    buscaralunoSenai()
    buscarFilmeIMDB()
  },
 [])

    
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

    <div className="container">
      
      <Dbz 
        personagemDbz={personagemDbz}
        alunoSenai={alunoSenai} 
      />
    
      <div className="lado">

        <Imdb
          filmeIMDB={filmeIMDB}
        />


        <main className="pokedex">

          <h2>Minha Pokedex - Deploy automatico 2</h2>

          <Poke
            pokemon={pokemon}
            nome={nome}
            setNome={setNome}
            buscarPokemon={buscarPokemon}
            carregando={carregando}
            erro={erro}
          />  
       </main>
     </div>
    </div> 

  );
     
}

export default App
