import { Router, Request , Response } from "express";
import { AuthController } from "../controllers/auth-controller";
import validate from "../middlewares/validateResource";
import { CreateUserSchema } from "../schemas/user-schema";

const router = Router();

// create an account
router.post('/', validate(CreateUserSchema) , AuthController.createUserHandler);









export default router;