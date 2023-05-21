import { useState } from "react";

const SalidaPokemonThen = (props) => {

  const [listaPokemon, setListaPokemon] = useState([]);

  const traerDatos = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((resultado) => {
      console.log("Entrando en el primer then");
      return resultado.json()
    })
      .then((resultado) => {
      console.log("Entrando en el segundo then");
      console.log(resultado);
      console.log(resultado.results);
      console.log(resultado.results[0].name);
      console.log(resultado.results[0].url);
      let lista = resultado.results.map((item, index) => {
        return item.name;
      })
      setListaPokemon(lista);
    })
    .catch((error) => {
      console.log("Entrando en el catch");
      console.log(error);
    } );
  };
    

  return (
    <div>
      <h1>API Pokemon</h1>
      <button onClick={traerDatos}>Fetch Pokemon</button>
      {listaPokemon.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default SalidaPokemonThen;
