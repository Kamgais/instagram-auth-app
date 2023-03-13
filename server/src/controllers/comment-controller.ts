import { Request, Response } from "express";
import { CommentDto } from "../dtos/comment-dto";
import { AddCommentInput } from "../schemas/comment-schema";
import { addComment } from "../services/comment-service";
import { findPostById } from "../services/post-service";
import { findUserById } from "../services/user-service";
import { OutPutType } from "../utils/output-type";


type ParamsDictionary  = {
    userId: string,
    postId: string
}
export class CommentController {

    static async addComment(req: Request<ParamsDictionary,{}, AddCommentInput>, res: Response<OutPutType<CommentDto>>): Promise<Response>{
        const {userId, postId} =  req.params;

        

        const newComment = {...req.body, userId, postId}
        
        try {
            const user = await findUserById(+userId);
            if(!user) return res.status(400).json({message : 'user not found'})
            const post = await findPostById(+postId)
            if(!post)  return res.status(400).json({message: 'post not found '})
            const savedComment = await addComment(newComment);
            return res.status(201).json(savedComment)
            
        } catch (error: any) {
         return res.status(500).json({message : error.message})   
        }
    }
}