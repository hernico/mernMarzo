const productosController = require('../controllers/productos.controller');

module.exports = (app) =>{
    app.get('/productos/listar', productosController.index);
//     app.post('/productos/crear', productosController.create);
//     app.get('/productos/productos/:id', productosController.show);
//     app.put('/productos/productos/:id', productosController.update);
//     app.delete('/productos/productos/:id', productosController.destroy);
}