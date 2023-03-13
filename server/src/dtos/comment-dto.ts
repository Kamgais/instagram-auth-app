import { AddCommentInput } from "../schemas/comment-schema";


export type CommentDto = AddCommentInput & {id: number, userId: number, postId: number}