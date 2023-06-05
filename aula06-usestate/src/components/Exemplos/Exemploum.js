import {usestate} from 'react'

function Exemploum({desc01, desc02, desc03, desc04}){
    return(
        <div className="exemplos">
           <form action="">
                <input type="text" placeholder={desc01} />
                <input type="text" placeholder={desc02} />
                <input type="text" placeholder={desc03} />
                <input type="text" placeholder={desc04} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Exemploum;