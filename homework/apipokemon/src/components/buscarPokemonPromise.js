import { useState } from "react";

const SalidaPokemonPromise = (props) => {
  const [listaPokemon, setListaPokemon] = useState([]);

  const traerDatos = async () => {
    let myFetch = fetch("https://pokeapi.co/api/v2/pokemon?limit=807");
    let resultado = await myFetch;
    resultado = await resultado.json();
    // return response.json();
    console.log(resultado.results);
    console.log(resultado.results[0].name);
    console.log(resultado.results[0].url);

    let lista = resultado.results.map((item, index) => {
      return item.name;
    });
    setListaPokemon(lista);
  };


  return (
    <div>
      <h1>API Pokemon Fetch</h1>
      <button onClick={traerDatos}>Fetch Pokemon </button>
      {listaPokemon.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default SalidaPokemonPromise;
