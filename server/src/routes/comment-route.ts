import { Router } from "express";
import { CommentController } from "../controllers/comment-controller";
import { authorize } from "../middlewares/autorizeRequest";
import validate from "../middlewares/validateResource";
import { AddCommentSchema } from "../schemas/comment-schema";
const router = Router();


// add a comment
router.post('/:userId/:postId', validate(AddCommentSchema),authorize, CommentController.addComment)


export default router;