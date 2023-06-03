import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:8000/api/productolist/actualizar/${id}`)
      .then(res => {
        console.log(res.data.Producto);
        const product = res.data.Producto;
        setNombre(product.nombre);
        setPrecio(product.precio.toString());
        setDescription(product.description);
      })
      .catch(err => console.error(err));
  }, [id]);

  const onSubmitHandler = e => {
    e.preventDefault();
    const updatedProduct = {
      nombre: nombre,
      precio: parseInt(precio),
      description: description,
    };





    axios
      .put(`http://localhost:8000/api/productolist/actualizar/${id}`, updatedProduct) 
      .then((res) => {
        console.log(res.data);
        navigate('/products');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Product Manager ACTUALIZADOR</h1>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Nombre</label><br />
          <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </p>
        <p>
          <label>Precio</label><br />
          <input type="text" name="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </p>
        <p>
          <label>Descripción</label><br />
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </p>
        <input type="submit" value="Actualizar" />
      </form>
    </div>
  )
}

export default UpdateProduct;
