import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Dbz( ) {

  const [personagemDbz, setPersonagemDbz] = useState({})
  const [alunoSenai, setAlunoSenai] = useState({})

  async function buscaralunoSenai(){
    const aluno =  await axios.get(`https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/3`)
    const aprendiz = aluno.data
    setAlunoSenai(aprendiz)

  }

   async function buscardragonball() {
    const imagemdbz =  await axios.get(`https://dragonball-api.com/api/characters/2`)
    const animeDbz = imagemdbz.data
    setPersonagemDbz(animeDbz)
  }
  
   useEffect(() => {
    buscardragonball()
    buscaralunoSenai()
  },[])




  return (
      <div className="container">
    <div>
        <div className="dbz-section">
        <h2>Consumo de API</h2>
            <div>
            <img
              src={personagemDbz.image}
              style={{ width: '150px' }} 
            />
            <p>{alunoSenai.nome} {alunoSenai.sobrenome}</p>
          </div>
           </div>
    </div>
    </div>
    
  );
}

export default Dbz;