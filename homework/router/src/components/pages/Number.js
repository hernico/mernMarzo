import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Number = () => {
    const [number, setNumber] = useState("");
const navigate = useNavigate();

    const handleInputChange = (event) => {
        setNumber(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/LuckyNumber/${number}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="number">Elige tu numero de la suerte</label>
                <input
                    type="number"
                    id="number"
                    value={number}
                    onChange={handleInputChange}
                />
                
                <button type="submit" >Submit</button>
            </form> 
        </div>
    );
};


export default Number;