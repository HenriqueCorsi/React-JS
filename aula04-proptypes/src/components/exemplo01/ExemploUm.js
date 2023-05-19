import PropTypes from 'prop-types'

function ExemploUm({model, brand, year}){
    return(
        <div className="box-exemplo">
            <ul>
                <li>{model} - {brand} - {year}</li>
            </ul>
        </div>
    )
}

ExemploUm.protoTypes = {
    model:PropTypes.string,
    brand:PropTypes.string,
    year:PropTypes.number
}

export default ExemploUm;