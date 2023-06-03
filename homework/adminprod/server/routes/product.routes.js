const ProductsController = require("../controllers/product.controller");

module.exports = app => {
   
    app.post("/api/producto/nuevo", ProductsController.createProducto);
    app.get("/api/productolist/", ProductsController.encontrarTodos);
    app.get("/api/productolist/:id", ProductsController.encontrarUnProducto);
    app.put("/api/productolist/actualizar/:id", ProductsController.actualizarUnProducto);
    // app.delete("/api/productolist/borrar/:id", ProductsController.borrarUnProducto);
    
    }
