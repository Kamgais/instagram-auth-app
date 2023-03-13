
import { Router } from "express";
import { PostController } from "../controllers/post-controller";
import { authorize } from "../middlewares/autorizeRequest";

const router = Router();

// get all posts
router.get('', authorize, PostController.getAll);

// update post
router.put('', authorize, PostController.likePost)




export default router;