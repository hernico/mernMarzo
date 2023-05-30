import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,  } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ProductList = () => {

    const [Listproducts, setListProducts] = useState([{}]);
    const [detail, setDetail] = useState("");
    const navigate = useNavigate(); 


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setListProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    
    const handleInputChange = (e) => {
        const detailValue = e.target.textContent;
        console.log(detailValue);
        setDetail(detailValue);
    };
console.log(setListProducts)


    return (
        <div>
            <h1>All Products:</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                {Listproducts.map((product, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{product.nombre}</td>
                                <td onClick={handleInputChange}>
  <span id="detailValue">{product._id}</span> 
</td>
                                <td  id='detail'onClick={handleInputChange} >{product._id}</td>
                                
                                <button value={detail} onClick={() => navigate(`/products/${product._id}`)}> Product detail</button> 
                                <button onClick={() => navigate(`/products/${product._id}`)}> Product detail</button> 

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <button onClick={() => navigate("new")}>Create a Product</button>
        </div>
    )
}


export default ProductList;