const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    Cantidad: Number
}, { timestamps: true });

const Productos = mongoose.model('Productos', ProductSchema);
module.exports = Productos;
