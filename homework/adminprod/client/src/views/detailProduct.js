import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
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

      console.log('rendering ProductDetail');

      return (
        <div>
          <h1>Product Detail</h1>
          <p>Nombre: {product.Products.nombre}</p>
          <p>Precio: {product.precio}</p>
          <p>Description: {product.description}</p>
          <button onClick={() => Navigate('/products')}>Go to List</button>
          <button onClick={() => Navigate('/products/update')}>Update a Product</button>
        </div>
      );
      






  
}
export default ProductDetail;
