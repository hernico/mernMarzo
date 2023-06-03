import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/productolist/${id}`)
      .then(res => {
        console.log('product from API:', res.data.Producto);
        setProduct(res.data.Producto); // Actualizar el estado con los datos de la respuesta
      })
      .catch(err => console.log(err));
  }, [id]);

  console.log('rendering ProductDetail');

  return (
    <div>
      <h1>Product Detail</h1>
      {Object.keys(product).length > 0 && (
        <>
          <p>Nombre: {product.nombre}</p>
          <p>Precio: {product.precio}</p>
          <p>Description: {product.description}</p>
        </>
      )}
    
      <button onClick={() => navigate('/products')}>Go to List</button>
      <button onClick={() => navigate('/products/actualizar/' + id)}>Update a 1</button>
      <button onClick={() => navigate('/products/actualizar')}>Update a 2</button>
    </div>
  );
};

export default ProductDetail;
