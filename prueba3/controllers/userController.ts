import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  async createUser(req: Request, res: Response){
    try{
      const newUser = User.create(req.body);
      return res.status(201).json(newUser);
    } catch(error) {
    console.log(error);
    }
  }

  async getUsers(req: Request, res: Response){
    try{
      const users = await User.find();
      return res.status(200).json(users);
    } catch(error) {
      console.log(error);
    }
  }
  async deleteUser(req: Request, res: Response){
    try{
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({error: "User not fund"});
    }
  }
  async updateUser(req: Request, res: Response){
    try{
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json(user);
    } catch(error) {
      return res.status(400).json({error: "An error occurred while updating the user"});
    }
  }
  async getUsersByEmail(req: Request, res: Response){
    try{
      const user = await User.findOne({ email: req.params.email });
      return res.status(200).json(user);
    } catch(error) {
      return res.status(400).json({error: "An error occurred while retrieving the user"});
    }
  }
}



export const userController = new UserController();