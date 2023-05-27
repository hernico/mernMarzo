import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
        const homeworldResponse = await axios.get(response.data.homeworld);
        setHomeworld(homeworldResponse.data.name);
      } catch (error) {
        setCharacter(null);
        setHomeworld(null);
      }
    };

    fetchCharacterDetails();
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <p>Altura: {character.height}</p>
          <p>Peso: {character.mass}</p>
          <p>Color de pelo: {character.hair_color}</p>
          <p>Color de piel: {character.skin_color}</p>
          {homeworld && <p>Planeta de origen: {homeworld}</p>}
        </div>
      ) : (
        <p>No se encontró ningún personaje con esa ID, hoy la fuerza no está contigo.</p>
      )}
    </div>
  );
};

export default CharacterDetails;
