import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosPokemonLista = (props) => {
  const [listaPokemon, setListaPokemon] = useState([]);

  const traerDatos = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=807"
      );
      setListaPokemon(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerDatos();
  }, []);

  const handleOnClick = () => {
    traerDatos();
  };

  return (
    <div>
      <h1>API Pokemon Axios</h1>

      <button onClick={handleOnClick}>click here</button>

      {listaPokemon.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </div>
  );
};

export default AxiosPokemonLista;