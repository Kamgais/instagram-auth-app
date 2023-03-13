import { CommentDto } from "../dtos/comment-dto";
import { Comment } from "../models/comment-model";


export class CommentMapper {

    static toDto(comment: Comment): CommentDto {
        return {
            id: comment.id,
            content: comment.content,
            likeCounter: comment.likeCounter,
            userId: comment.userId,
            postId: comment.postId
        }
    }
}