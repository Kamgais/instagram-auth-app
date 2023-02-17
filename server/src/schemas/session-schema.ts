import * as z from 'zod';




export const SessionSchema = z.object({
    username: z.string({
        required_error: 'username is required'
    }).min(3).max(10),
    password: z.string({
        required_error: 'password is required'
    })
})

export type UserLoginInput = z.infer<typeof SessionSchema>