import { Data } from "ejs"
import { CommentDto } from "./comment-dto"
import { MediaDto } from "./media-dto"



export type PostDto = {
    id: number,
    description:string,
    likeCount: number,
    userId: number,
    medias: MediaDto[],
    createdOn: Date,
    comments: CommentDto[]
}