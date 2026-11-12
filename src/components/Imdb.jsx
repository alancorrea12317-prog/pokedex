function Imdb({ filmeIMDB }) {

    
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