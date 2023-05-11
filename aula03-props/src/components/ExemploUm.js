function ExemploUm({nome}){
    return(
        <div>
            <div className="box-explicacao second">
                <h3>No Exemplo 01 o meu nome é uma props, ou seja, um valor dinâmico.</h3>
            </div>
            <div className="box-explicacao">
                <h3>Exemplo 01</h3>
                <p>Olá Seja Bem Vindo! Eu me chamo {nome}</p>
            </div>
        </div>
    )
}


export default ExemploUm