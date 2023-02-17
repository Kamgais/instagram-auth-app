import * as z from 'zod';



export const CreateUserSchema = z.object({
    username: z.string({
        required_error: 'username is required'
    }).min(3).max(10),
    name: z.string({
        required_error: 'name is required'
    }).min(3).max(20),
    
    password: z.string({
        required_error: 'password is required'
    }),
    email : z.string({
        required_error: 'Email is required'
    }).email('Not a valid email')

})

export type CreateUserInput = z.infer<typeof CreateUserSchema>;