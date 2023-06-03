import{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const CreateProduct = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        const nuevoProducto = {
            nombre: e.target.nombre.value,
            precio: e.target.precio.value,
            description: e.target.description.value,
            
        };
        axios
        .post('http://localhost:8000/api/producto/nuevo', nuevoProducto)
        .then((res) => {
            console.log(res.data);
            navigate('/products');
        })
        .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Nombre</label><br/>
                    <input type="text" name="nombre" onChange={(e) => setNombre(e.target.value)}/>
                </p>
                <p>
                    <label>Precio</label><br/>
                    <input type="text" name="precio" onChange={(e) => setPrecio(e.target.value)}/>
                </p>
                <p>
                    <label>Descripción</label><br/>
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)}/>
                </p>
                <input type="submit" value="Crear"/>
            </form>
        </div>
    )
}

export default CreateProduct;
// import{useState,useEffect} from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
//






// const CreateProduct = () => {
//     const [nombre, setTitle] = useState("");
//     const [precio, setPrice] = useState("");
//     const [Description, setDescription] = useState("");
//     const navigate = useNavigate();

//     const onSubmitHandler = e => {
//         e.preventDefault();
//         e.preventDefault();               
//         const nuevoProducto = {
//             nombre: e.target.nombre.value,
//             precio: e.target.precio.value,
//             description: e.target.description.value,
//         };
//         axios
//         .post('http://localhost:8000/api/producto/nuevo', nuevoProducto)
//         .then((res) => {
//           console.log(res.data);
//           navigate('/products');
//         })
//         .catch((err) => console.log(err));
//     };

//     return (
//         <div>
//             <h1>Product Manager</h1>
//             <form onSubmit={onSubmitHandler}>
//                 <p>
//                     <label>Nombre</label><br />
//                     <input type="text" name="nombre" />
//                 </p>
//                 <p>
//                     <label>Precio</label><br />
//                     <input type="text" name="precio" />
//                 </p>
//                 <p>
//                     <label>Description</label><br />
//                     <input type="text" name="description" />
//                 </p>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

// export default CreateProduct;

