import { CommentDto } from "./CommentDto"
import { MediaDto } from "./MediaDto"

export type PostDto = {
    id?: number,
    description?:string,
    likeCount?: number,
    userId?: number,
    medias: MediaDto[],
    createdOn: Date,
    comments: CommentDto[]
}