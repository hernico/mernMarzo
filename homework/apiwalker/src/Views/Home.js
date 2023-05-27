import { useEffect, useState } from "react"
import { getAllCharacters } from "../services/charactersService"

export const Home = () => {
    const [resources, setResources] = useState([])
    const [selectedValue, setSelectedValue] = useState(null);
    
    const getSwapi = async () => {
        try {
            const swapiData = await getAllCharacters()
            console.log("copydata", swapiData)
            setResources(Object.keys(swapiData.data))
            console.log('swapiData.data :', swapiData.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSwapi()
    }, [])

    const handleChange = (e) => {
        setSelectedValue(e.target.value);}

        async function cargarVariables (url) {
            // forma de realizar una consulta asíncrona a la API
            let retornoVar = await fetch(url)
            // forma de desempaquetar una respuesta de API
            retornoVar = await retornoVar.json()
            console.log('retornoVar :', retornoVar);}

    return (
        <div>
            <form action="" id="show">
                <label htmlFor="">Selecciona una opción</label>

                <select name="" id="" onChange={handleChange}>
                    {resources.length > 0 && resources.map((value, index) => (
                        <option key={index} value={value}>{value}</option>
                    )
                    )}
                </select>
                {/* <button onClick={() => cargarVariables(`https://swapi.dev/api/${selectedValue}/`)}>Cargar</button> */}

                
            </form>
            <p>Selected value: {selectedValue}</p>
        </div>
    )
}
