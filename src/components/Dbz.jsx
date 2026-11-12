

function Dbz( {personagemDbz,alunoSenai })        {


    
  return (
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
  );
}

export default Dbz;