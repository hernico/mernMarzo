import { CheckSquareOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Checkbox } from 'antd';

function ToDo() {
  const [colors, setColors] = useState(["yellow"]);

  const [newColor, setNewColor] = useState("");

  // console.log(newColor);

  function addColor(ev) {
    ev.preventDefault();
    setColors([...colors, newColor]);
    setNewColor("");
  }

  function borrar(ev) {
    console.log(ev.target.dataset.key);
    const newColors = colors.filter((col) => col != ev.target.dataset.key);
    console.log(newColors);
    setColors(newColors);
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  

  return (
    <div className="colors">
      <form onSubmit={addColor}>
        <input
          type="text"
          required
          value={newColor}
          onChange={(ev) => setNewColor(ev.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <div className="form-group">
        <div className="todo">
          {colors.map((color) => (
            <div data-key={color} key={color} onClick={borrar}  > 
              {color}  <Checkbox className="checkbox"></Checkbox>
              <button data-key={color} key={color}>Delete</button> 
               </div>
            
          ))}
       
        </div>
      </div>
    </div>
  );
}

export default ToDo;
