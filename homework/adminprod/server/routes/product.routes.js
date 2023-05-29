const ProductsController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products/", ProductsController.findAllProducts);
    app.post("/api/products/new", ProductsController.createNewProducts);
    app.get("/api/products/:id", ProductsController.findOneSingleProducts);
    app.put("/api/products/update/:id", ProductsController.updateExistingProducts);
    app.delete("/api/products/delete/:id", ProductsController.deleteAnExistingProducts);
}
