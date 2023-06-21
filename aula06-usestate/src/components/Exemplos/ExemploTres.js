import { useState } from "react"; 

function ExemploTres(){
    const [placa, setPlaca] = useState();
    const [modelo, setModelo] = useState();
    const [marca, setMarca] = useState();
    const [cor, setCor] = useState();

    function cadastro(){
        
    }

    return(
        <div className="exemplo-um">
            <h3>CADASTRO</h3>
            <form className="form-exemplo-tres">
                <input type="text" name="placa" id="placa" placeholder="Placa" onChange={(e) => setPlaca(e.target.value)} />
                <input type="text" name="modelo" id="modelo" placeholder="Modelo" onChange={(e) => setModelo(e.target.value)} />
                <input type="text" name="marca" id="marca" placeholder="Marca" onChange={(e) => setMarca(e.target.value)}/>
                <input type="text" name="cor" id="cor" placeholder="Cor" onChange={(e) => setCor(e.target.value)}/>
                <button onClick={cadastro} type="submit">Cadastrar</button>
            </form>
            <div className="tabela-exemplo-tres">
                <h3>{placa}</h3>
                <h3>{modelo}</h3>
                <h3>{marca}</h3>
                <h3>{cor}</h3>
            </div>
        </div>
    )
}

export default ExemploTres;