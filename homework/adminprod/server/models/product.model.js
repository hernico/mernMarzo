const mongoose = require("mongoose");

// const ProductsSchema = new mongoose.Schema(
//     {
	
// 	nombre:{
//     type: String,
//     precio:Number,
//     description:String,
//     },
//     },
//     {timestamps: true}
// );

const ProductoSchema = new mongoose.Schema({
	nombre:{type: String},
    precio:{type: Number},
    description:{type: String}
    },
    {timestamps: true}
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;

// const Products = mongoose.model("Products", ProductsSchema);

// module.exports = Products;