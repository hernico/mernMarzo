import { CheckSquareOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Checkbox } from 'antd';

function ToDo() {
  const [todos, setTodos] = useState(["Agregar tu primera tarea"]);

  const [newTodo, setNewTodo] = useState("");

  // console.log(newTodo);

  function addTodo(ev) {
    ev.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function borrar(ev) {
    console.log(ev.target.dataset.key);
    const newTodos = todos.filter((tod) => tod != ev.target.dataset.key);
    console.log(newTodos);
    setTodos(newTodos);
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  

  return (
    <div className="todos">
      <form onSubmit={addTodo}>
        <input
          type="text"
          required
          value={newTodo}
          onChange={(ev) => setNewTodo(ev.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <div className="form-group">
        <div className="todo">
          {todos.map((todo) => (
            <div data-key={todo} key={todo} onClick={borrar}  > 
              {todo}  <Checkbox className="checkbox"></Checkbox>
              <button data-key={todo} key={todo}>Delete</button> 
               </div>
            
          ))}
       
        </div>
      </div>
    </div>
  );
}

export default ToDo;
