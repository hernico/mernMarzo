import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Color = () => {
    const { color } = useParams();
    const colors = document.getElementById('#azar');
    Element.style.color = NewColor;
    useEffect(() => {
        document.getElementById('#azar').style.color = color;
    }, [color]);
    const NewColor = (event) => {
        event.preventDefault();
        document.getElementById('#azar').style.color = color;
    };
    return (
        <div>
            <h2 id="azar">El color es {color}</h2>
            <button onClick={NewColor}>Cambiar Color</button>
        </div>
    );
};




export default Color;