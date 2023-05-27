import axios from "axios";

export const getAllCharacters = () => axios.get("https://swapi.dev/api/")


export const getAllPeople = () => axios.get(`https://swapi.dev/api/people`);

export const getOneSinglePeople = (id) => axios.get(`https://swapi.dev/api/people/${id}`)

export const getAllFilms = () => axios.get(`https://swapi.dev/api/films`);

export const getOneSingleFilms = (id) => axios.get(`https://swapi.dev/api/films/${id}`)

export const getAllStarships = () => axios.get(`https://swapi.dev/api/starships`);

export const getOneSingleStarships = (id) => axios.get(`https://swapi.dev/api/starships/${id}`)

export const getAllVehicles = () => axios.get(`https://swapi.dev/api/vehicles`);

export const getOneSingleVehicles = (id) => axios.get(`https://swapi.dev/api/vehicles/${id}`)

export const getAllSpecies = () => axios.get(`https://swapi.dev/api/species`);

export const getOneSingleSpecies = (id) => axios.get(`https://swapi.dev/api/species/${id}`)

export const getAllPlanets = () => axios.get(`https://swapi.dev/api/planets`);

export const getOneSinglePlanets = (id) => axios.get(`https://swapi.dev/api/planets/${id}`)
