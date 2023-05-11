import { useState } from "react"


//CAMINO LARGO
// function CounterDos () {
//     const count = 40
//     return (
//         <><h1>  {count}    </h1>
        
//         <button>Click Here</button></>
//     )
// }

// CAMINO UN POCO MAS CORTO
// function CounterDos () {
//     const [count,setCount] = useState(50)
    

//     return (
//         <><h1>  {count}    </h1>
        
//         <button onClick={ () => {setCount(count+1)}}>Click Here</button></>
//     )
// }

// function CounterDos () {
//     const [count,setCount] = useState(50)
    

//     return (
//         <><h1>  {count}    </h1>
        
//         <button onClick={ () => {setCount(count+1)}}>Click Here</button></>
//     )
// }

//CAMINO CORTO Y NECESARIO APRENDER
function CounterDos () {
    const [count,setCount] = useState(50)
    const increment = () => {setCount(count+1)}
    console.log('increment :', increment);

    console.log({count})
    console.log(count)
    const verCambio = (event) =>{
    setCount(event.target.value)
    
    }

    return (
        <><h1>  {count}    </h1>
        
        <button onClick={increment}>Click Here</button></>
    )
    // <div  {increment.}  />
}




export {CounterDos}