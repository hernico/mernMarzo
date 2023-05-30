
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
          .get(`http://localhost:8000/api/products/${id}`)
          .then(res => {
            setProduct(res.data);
            console.log('product from API:', res.data);
          })
          .catch(err => console.log(err));
      }, [id]);

      console.log('rendering PersonDetails');

      return (
  <div>
    <h1>Product Detail</h1>
    {Object.keys(product).length > 0 && (
      <>
        <p>Nombre: {product.Products.nombre}</p>
        <p>Precio: {product.Products.precio}</p>
        <p>Description: {product.Products.description}</p>
      </>
    )}
    <button onClick={() => Navigate('/products')}>Go to List</button>
    <button onClick={() => Navigate('/products/update')}>Update a Product</button>
  </div>
);
      






  
}

export default PersonDetails;