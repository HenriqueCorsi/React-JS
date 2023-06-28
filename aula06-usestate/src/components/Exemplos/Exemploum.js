import {useState} from "react"

function ExemploUm(){
    const nome = useState("Paulo Henrique");

    return(
        <div className="exemplo-um">
            <h2>Olá, me chamo {nome}</h2>
        </div>
    )
}

export default ExemploUm;
