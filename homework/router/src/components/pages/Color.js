import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Color = () => {
    const [color, setColor] = useState("");
const navigate = useNavigate();

    const handleInputChange = (event) => {
        setColor(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/blue/${color}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Elige tu color favorito </label>
                <input
                    type="text"
                    id="color"
                    value={color}
                    onChange={handleInputChange}
                />
                
                <button type="submit" >Submit</button>
            </form> 
        </div>
    );
};


export default Color;