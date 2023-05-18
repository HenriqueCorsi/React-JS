import NavBar from "./navBar";

function ExemploQuatro({desc}){
    return(
        <div>
            <div className="box-explicacao second">
                <h3>{desc}</h3>
            </div>
            <div className="box-explicacao exemplo-quatro">
                <div className="nav-bar">
                    <NavBar nameSection="Início"/>
                    <NavBar nameSection="Minha Rede"/>
                    <NavBar nameSection="Vagas"/>
                    <NavBar nameSection="Mensagens"/>
                    <NavBar nameSection="Notificações"/>
                </div>
            </div>
        </div>
    )
}


export default ExemploQuatro;