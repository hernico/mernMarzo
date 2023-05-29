import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowProduct = () => {
    const [Listproducts, setListProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        console.log('useEffect');
        axios.get('http://localhost:8000/api/products')
            .then(res => setListProducts(res.data)) 
            .catch(err => console.log(err))
    }, []);
    

    return (
        <div>
            <h1>All Products:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* {Listproducts.map((product, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{product.nombre}</td>
                                <td>{product.precio}</td>
                                <td>{product.Description}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
            <button onClick={() => navigate("/new")}>Create a Product</button>
        </div>
    )
}



                        






export default ShowProduct;
