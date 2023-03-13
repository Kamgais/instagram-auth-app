

import { Router } from "express";
import { UserController } from "../controllers/user-controller";

const router = Router();

// get user by id
router.get('/:id', UserController.getUser)

export default router;