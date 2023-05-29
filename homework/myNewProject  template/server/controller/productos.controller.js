const ProductosModel = require('../models/productos.model');

module.exports.ListarProductos = async (req, res) => {
    const result = await ProductosModel.find();
    res.json(result);
}

// module.exports.CrearProducto = async (req, res) => {
//     let data = req.body;
//     const nuevoProducto = new ProductosModel(data);
//     await nuevoProducto.save();
//     res.json(nuevoProducto);
// }

// module.exports.ActualizarProducto = async (req, res) => {
//     let id = req.params.id;
//     let data = req.body;
//     await ProductosModel.findById(id, (err, producto) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(producto);
//         }
//     }
//     )
// }

// module.exports.BorrarProducto = async (req, res) => {
//     let id = req.params.id;
//     await ProductosModel.findByIdAndDelete(id, (err, producto) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(producto);
//         }
//     }
//     )
// }







