const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
    {
	
	nombre:{
        type: String,
        // required: [true, "Setup is required"],
        // minlength: [10, "Setup must be at least 10 characters long"]
    },
    precio:{
        type: Number,
        // required: [true, "Punchline is required"],
        // minlength: [3, "Punchline must be at least 3 characters long"]
    },
    Cantidad:{
        type: Number,
    },
    },
    {timestamps: true}
);



const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;