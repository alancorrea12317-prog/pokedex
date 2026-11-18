import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


function Imdb() {

   const [filmeIMDB, setFilmeIMDB] = useState({})

    async function buscarFilmeIMDB() {
    const filme =  await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=90f99163`)
    const cinemaIMDB = filme.data
    setFilmeIMDB(cinemaIMDB)
  }

   useEffect(() => {
    buscarFilmeIMDB()
  },[])

    
  return (
    <div className="imdb-section">
      <h2>Cinema</h2>
      <div>
        <img
          src={filmeIMDB.Poster}
          style={{ width: '300px' }}
        />
        <p>{filmeIMDB.Title} ({filmeIMDB.Year})</p>
        <p>Gênero: {filmeIMDB.Genre}</p>
        <p>Diretor: {filmeIMDB.Director}</p>
      </div>
    </div>

  );
}

export default Imdb;