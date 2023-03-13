import { PostDto } from "../dtos/post-dto";
import { Post } from "../models/post-model";
import { CommentMapper } from "./comment-mapper";
import { MediaMapper } from "./media-mapper";


export class PostMapper {

    static toDto(post: Post): PostDto {
       
        return {
            id: post.id,
            description: post.description,
            likeCount: post.likeCount,
            userId: post.userId,
            medias: post.medias.map((media) =>MediaMapper.toDto(media)),
            createdOn: post.createdOn!,
            comments: post.comments ? post.comments.map((comment) => CommentMapper.toDto(comment)) : []
        }
    }
}