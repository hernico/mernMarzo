import { useState } from "react";
import { useParams } from "react-router-dom";

function LuckyColor() {
  const { colores } = useParams();
  const [Cambio, setCambio] = useState(colores);
  const handleInputChange = (event) => {
   document.getElementById("azar").value = event.target.value ;
    setCambio(event.target.value);  
    console.log('Cambio :', Cambio);
  };
  

  return (
    <div>
      <input type="color" id="azar" onChange={handleInputChange}/>
      <h3 style={{
        color: colores,
        backgroundColor: "blue",
      }} > el color es {colores} </h3> 

    </div>  
  );
}

export default LuckyColor;
