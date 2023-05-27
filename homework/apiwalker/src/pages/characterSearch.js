import React, { useState } from "react";
import axios from "axios";


const CharacterSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("people");
  const [character, setCharacter] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const fetchHomeworld = async (homeworldURL) => {
    try {
      const response = await axios.get(homeworldURL);
      return response.data.name;
    } catch (error) {
      return null;
    }
  };

  const handleSearch = async () => {
    if (inputValue === "") {
      setErrorMessage("Por favor, ingresa un número.");
      setCharacter(null);
    } else {
      try {
        const response = await axios.get(`https://swapi.dev/api/${category}/${inputValue}/`);
        setErrorMessage("");
        setCharacter(response.data);
        if (category === "people") {
          const homeworldName = await fetchHomeworld(response.data.homeworld);
          setCharacter((prevCharacter) => ({
            ...prevCharacter,
            homeworld: homeworldName,
          }));
        }
      } catch (error) {
        setErrorMessage("Estos no son los droides que está buscando.");
        setCharacter(null);
      }
    }
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="films">Films</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="species">Species</option>
        <option value="starships">Starships</option>
        <option value="vehicles">Vehicles</option>
      </select>
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
        <button onClick={handleSearch}>Buscar</button>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
          <img src="https://images.justwatch.com/poster/273736910/s718/obi-wan-kenobi.%7Bformat%7D"alt="error" sizes="" />
        </div>
      )}
    
      {character && (
        <div>
          {category === "people" && (
            <div>
              <h2>{character.name}</h2>
              <p>Altura: {character.height}</p>
              <p>Peso: {character.mass}</p>
              <p>Color de pelo: {character.hair_color}</p>
              {character.homeworld && (
                <p>
                  Planeta de origen:{character.homeworld}
                  
                  <p><a href={`people/${inputValue}`} className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                   Ver Detalles de  {character.name}  
                   {/* {inputValue}  */}
                  </a></p>
                </p>
              )}
              
            </div>
          )}
          {category === "planets" && (
            <div>
              <h2>{character.name}</h2>
              <p>Diametro: {character.diameter}</p>
              <p>Clima: {character.climate}</p>
              <p>Gravedad: {character.gravity}</p>
            </div>
          )}
           {category === "films" && (
            <div>
              <h2>{character.title}</h2>
              <p>Director: {character.director}</p>
              <p>Episodio: {character.episode_id}</p>
              <p>Fecha de lanzamiento: {character.release_date}</p>
            </div>
          )}
            {category === "species" && (
            <div>
              <h2>{character.name}</h2>
              <p>Clasificación: {character.classification}</p>
              <p>Designación: {character.designation}</p>
              <p>Lenguage: {character.language}</p>
            </div>
          )}
           {category === "starships" && (
            <div>
              <h2>{character.name}</h2>
              <p>Modelo: {character.model}</p>
              <p>Fabricante: {character.manufacturer}</p>
              <p>Clase de Starship: {character.starship_class}</p>
            </div>
          )}
            {category === "vehicles" && (
            <div>
              <h2>{character.name}</h2>
              <p>Modelo: {character.model}</p>
              <p>Fabricante: {character.manufacturer}</p>
              <p>Tipo de vehiculo: {character.vehicle_class}</p>
            </div>
          )}
          
        </div>
      )}
    </div>
  );
};

export default CharacterSearch;
