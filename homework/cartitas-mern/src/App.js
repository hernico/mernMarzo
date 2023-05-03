import React from "react"
import "./App.css"
import Tablero from "./components/Tablero"
import Boton from "./components/Boton"

function App() {
    return (
        <div className="App">
            <Boton />
            <Tablero />
        </div>
    )
}

export default App

// class CartaPersonaje {

//   constructor(nombre, rating, img) {
//       this.nombre = nombre;
//       this.rating = rating;
//       this.img = img;
//   }

// }

/*misPersonajesDatos.forEach(personajeDeLaLista => {

   cada vez que se crea un objeto se agrega a la lista misPersonajesDatos */

//forma corta
// cartasPersonajesObjetos.push(new CartaPersonaje(personajeDeLaLista.name, personajeDeLaLista.rating, personajeDeLaLista.img))})
