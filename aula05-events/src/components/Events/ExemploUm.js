function ExemploUm(){
    function btnEvent(){
        window.alert('Olá Mundo!!')
    }

    return(
       <div className='exemplo-um'>
        <button onClick={btnEvent}>Clique Aqui!</button>
       </div> 
    )
}

export default ExemploUm