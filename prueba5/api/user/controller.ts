import { Request, Response } from "express";
import { userService } from "./service";
import { verify } from "jsonwebtoken";
import User from "./model";

const { getUser, getUsers, createUser, loginUser, deleteUser, editUser } = userService;

class UserController {
    // Helper function to check if the user is authenticated and has the correct role
/*     checkAuthorization(req: Request, roles: string[]) {
        const token = req.header("authtoken");
        if (!token) throw new Error("Access denied");
        
        const verified = verify(token, process.env.JWT_SECRET!);
        const user = verified as any; // `user` debe estar tipado correctamente
        
        if (!roles.includes(user.role)) throw new Error("Access denied");
        
        return user;
    } */
    isAdmin(req: Request, res: Response, next: Function) {
        const token = req.headers;
        try {
          if(token){
            const isTokenValid = verify(
              token["token"] as string,
              process.env.JWT_SECRET!
            );
            console.log(isTokenValid);
            
            if(isTokenValid) {
              next();
            } else {
              res.status(401).send("Unauthorized User");
            }
          }
        } catch (error) {
            res.status(500).send(error);
        }
    }
    async getUser(req: Request, res: Response){
        const id = req.params.id;
        try {
            // Autenticación
            //this.checkAuthorization(req, ["admin", "comprador", "vendedor"]);
            const user = await getUser(id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({ error: "User not found" });            
        }
    }
    async getUsers(req: Request, res: Response){
        try {
            //this.checkAuthorization(req, ["admin"]);
            const users = await getUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({ error: "Users not found" });
        }
    }
    async createUser(req: Request, res: Response){
        try {
            const user = await createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }
    async loginUser(req: Request, res: Response){
        try {
           const token = await loginUser(req.body);
           return res.header("authtoken", token).status(200).json("Login successful");
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }
    async deleteUser(req: Request, res: Response){
        try {
            // Autenticación y autorización
            //this.checkAuthorization(req, ["admin"]);
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({ error: "User not found" });
        }
    }
    async editUser(req: Request, res: Response){
        try {
            // Autenticación y autorización
            //this.checkAuthorization(req, ["admin", "vendedor"]);
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { 
                new: true
             });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({ error: "User not found" });
        }
    }
}

export const userController = new UserController();