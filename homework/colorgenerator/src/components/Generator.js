import { useState } from "react";

function Colors() {
  const [colors, setColors] = useState(["yellow"]);

  const [newColor, setNewColor] = useState("");

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
      <div className="squares">
        {colors.map((color) => (
          <div
            data-key={color}
            key={color}
            onDoubleClick={borrar}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Colors;
