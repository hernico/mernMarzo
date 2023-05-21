import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosPokemonList = (props) => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    if(isLoading){
    traerDatos();
  }}, [isLoading]);


  console.log("listaPokemon", listaPokemon);
  console.log("isLoading", isLoading);

const handleOnClick = () => {
  setIsLoading(true);
};



  return (
    <div>
      <h1>API Pokemon Axios</h1>

      <button onClick={handleOnClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Pokemon"}
      </button>

      {listaPokemon.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </div>
  );
};

export default AxiosPokemonList;