const Producto = require("../models/product.model");


module.exports.createProducto= async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.json({ Producto: nuevoProducto });
  } catch (err) {
    res.json({ message: "Something went wrong con nuevo producto", error: err });
  }
};

module.exports.encontrarTodos = async (req, res) => {
  try {
    const todosLosProductos = await Producto.find();
    res.json({ Producto: todosLosProductos });
  } catch (err) {
    res.json({ message: "Something went wrong al buscar todos los productos", error: err });
  }
};

module.exports.encontrarUnProducto = async (req, res) => {
  try {
    const unProducto = await Producto.findById(req.params.id);
    res.json({ Producto: unProducto });
  } catch (err) {
    res.json({ message: "Something went wrong al buscar un producto", error: err });
  }
};

module.exports.actualizarUnProducto = async (req, res) => {
  try {
    const unProducto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({ Producto: unProducto });
  } catch (err) {
    res.json({ message: "Something went wrong al actualizar un producto", error: err });
  }
}

module.exports.eliminarUnProducto = async (req, res) => {
  try {
    const unProducto = await Producto.findByIdAndDelete(req.params.id);
    res.json({ Producto: unProducto });
  } catch (err) {
    res.json({ message: "Something went wrong al borrar un producto", error: err });
  }
}
