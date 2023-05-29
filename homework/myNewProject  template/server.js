const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('se conectó a la base de datos'))
    .catch(err => console.log('hubo un error al conectarse a la base de datos', err));

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
        next();
       res.setHeader('Access-Control-Allow-Credentials', true);

    });
app.use(express.json(), express.urlencoded({ extended: true }));

const productosRoutes = require('./server/routes/productos.routes');
productosRoutes(app);



const server = app.listen(8000, () => 
console.log(`Server running on port ${server.address().port}!`));
