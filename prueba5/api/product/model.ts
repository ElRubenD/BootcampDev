import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
/*     category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    }, */
    brand: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
/*     color: {
        type: String,
        required: true,
    }, */
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
});

const Product = model("Product", productSchema);

export default Product;