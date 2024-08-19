import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    //soft delete
/*     active: {
        type: Boolean,
        default: true,
    }, */
});

const  Category = model("Category", CategorySchema);

export default Category;