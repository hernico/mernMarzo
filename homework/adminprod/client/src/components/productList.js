import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');


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

    const deleteProduct = (id) => {
      if (window.confirm('Are you sure you want to delete this product?')) {
        axios
          .delete('http://localhost:8000/api/productolist/eliminar' + id)
          .then((res) => {
            console.log(res.data);
            setProducts(products.filter((product) => product._id !== id));
            setMessage('Product deleted successfully');
          })
          .catch((err) => console.error(err));
      }
    };
    


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
                    ID: {product._id}
                </p>
                <p>
                    Descripcion: {product.description}
                </p>
                <Link to={`/products/${product._id}`}>Detail</Link>
                <Link to={`/products/actualizar/${product._id}`}>Edit</Link>
                <button onClick={() => deleteProduct(product._id)}>Delete</button>

              </div>
            )
          })}
        </div>
      )

}

export default ProductList;