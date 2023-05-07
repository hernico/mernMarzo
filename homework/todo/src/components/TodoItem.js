import React from "react"

function TodoItem(props){
    return (
      <li>
        <span> V{props.completed}</span>
        <p className={`${props.completed && "TodoItem-p--completed"}`}>{props.text}</p>
      </li>
    )
  }

export {TodoItem}