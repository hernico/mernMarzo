import React,{useState} from "react";

const NuevoClick = (props) =>{
const [state,setState]= useState(0);

const clickHandler = e =>{
    console.log(state);
    setState(state+1);
}

return(
<div>
    
    has clickeado {state} veces

<button onClick={clickHandler}> Sumar tarea</button>


</div>
)};


export default NuevoClick;