function ExemploDois(){
    function darkMode(){
        var bottom = document.body
        var header = document.querySelector(".header")

        bottom.style.backgroundColor = "#000"
        header.style.color = "#fff"
    }

    function defaultMode(){
        var bottom = document.body
        var header = document.querySelector(".header")

        bottom.style.backgroundColor = "#fff"
        header.style.color = "#000"
    }

    return(
        <div className="exemplo-um">
            <div className="button-box">
                <button onClick={darkMode}>Dark Mode</button>
                <button onClick={defaultMode}>Default Mode</button>
            </div>
        </div>
    )
}

export default ExemploDois