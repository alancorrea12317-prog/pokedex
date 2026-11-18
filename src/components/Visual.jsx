import Imdb from './Imdb.jsx'
import Poke from './Poke.jsx'

function Visual() {
  return (
    <div className="lado">
      <Imdb/>

      <main className="pokedex">
       <Poke/>
      </main>
    </div>
  )
}

export default Visual 