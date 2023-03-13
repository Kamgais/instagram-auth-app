import { Comment } from "../models/comment-model"


export const addComment = async(comment: any) => {
    try {
      const commentFromDB = await Comment.create(comment);
      return Promise.resolve(commentFromDB) 
    } catch (error) {
     return Promise.reject(error)   
    }
}