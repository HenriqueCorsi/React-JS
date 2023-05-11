function ExemploDois({modelo, marca, ano, cor}){
    return(
        <div>
            <div className="box-explicacao second">
                <h3>No Exemplo 02 as informações  a respeito do veículo são todas props, isso deixa o componente muito mais dinâmico</h3>
            </div>
            <div className="box-explicacao">
                <div className="box-info">
                    <h3>Modelo:</h3>
                    <span>{modelo}</span>
                </div>
                <div className="box-info">
                    <h3>Marca:</h3>
                    <span>{marca}</span>
                </div>
                <div className="box-info">
                    <h3>Ano:</h3>
                    <span>{ano}</span>
                </div>
                <div className="box-info">
                    <h3>Cor:</h3>
                    <span>{cor}</span>
                </div>
            </div>
        </div>
    )
}

export default ExemploDois