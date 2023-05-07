import React from "react";

function TodoSearch(){
    const[searchValue, setsearchValue ] = React.useState("");
console.log('escribiendo '+ searchValue)

    return(
        <input placeholder="Ingresa una nueva tarea"
        value={searchValue}
        onChange={(event)=> {
            setsearchValue(event.target.value)
            console.log("escribiste en el TodoSearch") 
        console.log('event :', event.target.value);

        }} />
        )
}

  
  export {TodoSearch};