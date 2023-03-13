export type CommentDto = {
    id?:number,
    content?: string,
    likeCounter?: number,
    createOn?: Date,
    postId?: number,
    userId?: number
}