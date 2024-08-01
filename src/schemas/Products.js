const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
        productName: { type: String },
        productType: { type: String },
        price      : { type: Number },
        sauces     : { type : [{ type: String }] },
        ingredients: { type : [{
            grams : {type: Number},
            ingredientName : {type: String}
        }]}
    },
    {
        timestamps: true
    }
);

const Products = model("Products", productsSchema);
module.exports = Products;