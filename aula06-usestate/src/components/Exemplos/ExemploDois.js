import { useState } from "react";

function ExemploDois(){
    const [number, setNumber] = useState(1);

    function addNumber(){
        setNumber(number + 1);
    }

    function remNumber(){
        if(number <= 0){
            setNumber(0)
        }else{
            setNumber(number - 1);
        }
    }

    return(
        <div className="exemplo-um">
            <div>
                <h2>{number}</h2>
                <div className = "box-btn">
                    <button className="btn-ex-dois" onClick={remNumber}>Diminui</button>
                    <button className="btn-ex-dois" onClick={addNumber}>Aumenta</button>
                </div>
            </div>
        </div>
    )
}

export default ExemploDois;