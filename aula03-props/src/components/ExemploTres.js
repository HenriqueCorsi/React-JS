function ExemploTres({inputUm, inputDois, inputTres, inputQuatro}){
    return(
        <div>
             <div className="box-explicacao second">
                <h3>No Exemplo 03 é construído uma Form onde os placeholder são passados através de Props.</h3>
            </div>
            <div className="form-box">
                <form>
                    <div className="input-box">
                        <input type="text" placeholder={inputUm}/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder={inputDois}/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder={inputTres}/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder={inputQuatro}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExemploTres
