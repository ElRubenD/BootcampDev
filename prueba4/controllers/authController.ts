import { Request,Response } from "express";
import { config } from "dotenv";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import User from "../models/user";
config();

class AuthController{
    async register(req: Request, res: Response){
        try{
          const { email } = req.body;
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(400).json({ error: "User alredy exists"});
          }
          const newUser = User.create(req.body);
          return res.status(201).json(newUser);
        } catch(error) {
        console.log(error);
        }
    }
    async login(req: Request, res: Response){
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
          return res.status(400).json({ error: "User does not exist" });
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(400).json({ error: "Invalid password" });
        }
        const token = sign(
          {userId: user._id, email: user.email, isAdmin: user.is_admin},
          //con el ! le aseguramos en la variable tiene datos que no se preocupe
          process.env.JWT_SECRET!,
          { expiresIn: "1h" }
        );
        //el header van 2 cosas el 1ro va a ser el identificador el nombre que va a tener, 2do el valor, como una clave valor
        return res.header("token", token)
        .status(200)
        .json({ message: "Login Successful" });
      } catch (error) {
        console.log(error);
      }
      res.send("Login");
    }
}


export const authController = new AuthController();