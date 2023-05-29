import{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateProduct = () => {
    const [nombre, setTitle] = useState("");
    const [precio, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            nombre,
            precio,
            Description
        })

            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate("/new");
    }

    return (
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
            <button onClick={() => navigate("/products")}>Go to List</button>
            <button onClick={() => navigate("/products/update")}>Update a Product</button>
        </div>
    )
}



export default CreateProduct;
