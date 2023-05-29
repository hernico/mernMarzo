const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
    {
	
	nombre:{
    type: String,
    precio:Number,
    description:String,
    },
    },
    {timestamps: true}
);



const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;