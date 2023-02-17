import { Router } from "express";
import { createSessionHandler } from "../controllers/session-controller";

const router = Router();


// create a session
router.post('/', createSessionHandler)


export default router;