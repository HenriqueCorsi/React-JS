function ExemploTres({placa, modelo, marca, ano}){
    
    function submit(event){
        event.preventDefault()
        console.log('Cadastro Realizado com Sucesso!')
    }

    return(
        <div className="exemplo-tres">
            <form onSubmit={submit}>
                <input type="text" placeholder={placa}/>
                <input type="text" placeholder={modelo}/>
                <input type="text" placeholder={marca}/>
                <input type="text" placeholder={ano}/>
                <button type="submit" className="btn-exemplo-tres">Enviar</button>
            </form>
        </div>
    )
}

export default ExemploTres;