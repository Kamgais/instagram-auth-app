import * as z from 'zod'



export const AddCommentSchema = z.object({
    content: z.string({required_error: 'content of the comment is required'}),
    likeCounter: z.number({required_error: 'like count must be set'}).default(0)
})


export type AddCommentInput = z.infer<typeof AddCommentSchema>

