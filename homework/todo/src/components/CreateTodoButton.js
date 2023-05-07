import React from "react"


function CreateTodoButton(){
    return (
      <button 
      onClick={
        (event) => {
          console.log("has agregado tarea")
          console.log(event)
          console.log(event.target)
      }}
      >+</button>
    )
  }

export {CreateTodoButton}