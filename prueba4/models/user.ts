import { Schema, model } from 'mongoose';
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    user_name:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_admin: {
        type: Boolean,
        default: false,
    },
});

//.pre es para que ejecute una accion antes de llegar a la BBDD
UserSchema.pre("save", async function (next) {
    try {
        //el segundo argumento es el la extension del salt
        const hashedPassword = await bcrypt.hash(this.password ?? "", 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        console.log(error);
    }
});

const User = model("User", UserSchema);
export default User;