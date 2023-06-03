import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect is running");
        axios.get('http://localhost:8000/api/productolist')
            .then(res => {
                console.log(res.data);
                setProducts(res.data.Producto);
            }
            )
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
          <h1>Product Manager</h1>
          <button onClick={() => navigate('/products/new')}>Add a Product</button>
          {Array.isArray(products) && products.map((product, idx) => {
            return (
              <div key={idx}>
                <p>
                  Nombre: {product.nombre}

                </p>
                <p>
                    Precio: {product.precio}
                </p>
                <p>
                    Descripcion: {product.description}
                </p>
                <Link to={`/products/${product._id}`}>Detail</Link>
                <Link to={`/products/${product._id}/edit`}>Edit</Link>

              </div>
            )
          })}
        </div>
      )

}

export default ProductList;