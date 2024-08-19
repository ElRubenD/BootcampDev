import express, { Request, Response } from "express";
import { userController } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/getUsers", userController.getUsers);

usersRouter.get("/user-data", (req: Request, res: Response) => {
    res.send("User Data");
});

usersRouter.get("/user-settings", (req: Request, res: Response) => {
    res.send("User Settings");
});

usersRouter.post("/create-user", userController.createUser);
//se lo pasamos por param :identificador del param (:id)
usersRouter.delete("/delete-user/:id", userController.deleteUser);

usersRouter.post("/update-user/:id", userController.updateUser);

usersRouter.get("/user-email/:email", userController.getUsersByEmail);

export default usersRouter;




