import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const UpdateProduct = () => {
    let { idProduct } = useParams();
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        console.log(idProduct);
        axios.get("http://localhost:8000/api/products/" + idProduct)
        .then((response) => {
            console.log(response.data.nombre);
            console.log(response.data.precio);
            console.log(response.data.description);

            setNombre(response.data.nombre);
            setPrecio(response.data.precio);
            setDescription(response.data.description);
        });
    }, []);

    const edit = (e) => {
        e.preventDefault();

        var datos = {
            nombre: nombre,
            precio: precio,
            description: description
        };

        axios.put("http://localhost:8000/productos/update/" + idProduct, datos)
        .then((response) => {
            if(response.status == 200){
                //retornamos a la lista
            }
        });
    }

    return(
        <div>
            <form onSubmit={edit}>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">Nombre</span>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">Precio</span>
                    <input type="text" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} id="precio" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">Cantidad</span>
                    <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="cantidad" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
        </div>
    );
}

export default UpdateProduct;