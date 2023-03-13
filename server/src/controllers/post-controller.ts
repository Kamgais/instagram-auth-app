import { Request, Response } from "express";
import { PostDto } from "../dtos/post-dto";
import { PostMapper } from "../mappers/post-mapper";
import { Post } from "../models/post-model";
import { findAllPosts, updatePost } from "../services/post-service";


export class PostController {

    static async getAll(req: Request, res: Response): Promise<Response> {
        try {
          const postsFromDB: Post[] = await findAllPosts();
          const postDtos: PostDto[] = postsFromDB.map((post: Post) => PostMapper.toDto(post))
         // console.log(postDtos)
          return res.status(200).json(postDtos)
        } catch (error: any) {
         return res.status(500).json(error.message)   
        }
    }


    static async likePost(req: Request, res: Response): Promise<Response> {
        const post = req.body;
        
        try {
           const updatedPost: Post | null =  await updatePost(post);
          
           const updatedPostDto: PostDto = PostMapper.toDto(updatedPost!)
           return res.status(200).json(updatedPostDto)
        } catch (error: any) {
         return res.status(500).json({message: error.message})   
        }
    }
}