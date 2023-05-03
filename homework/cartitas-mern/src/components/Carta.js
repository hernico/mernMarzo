import React, { Component } from "react"

class Carta extends Component {
    render() {
        const { nombre, imagen, puntos} = this.props
        return (
            <div className="divCarta">
                <img src={imagen} />
                <h3>{nombre}</h3>
                <h4>{puntos}</h4>
            </div>
        )
    }
}

export default Carta

/* tablero.innerHTML += 
`<div> 
<img src=${cartaRandom.img} alt=""> 
<p>${cartaRandom.nombre}</p> 
<p>${cartaRandom.rating}</p> 
</div>`*/
