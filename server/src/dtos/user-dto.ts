import { CreateUserInput } from "../schemas/user-schema";
import { PostDto } from "./post-dto";


export type UserDto = Omit<CreateUserInput ,"password"> & {
    id?: number,
    telefon?: string | null,
    sex?: string,
    characteristics?: string,
    isEmailConfirmated?: boolean,
    sessions: number[],
    posts: PostDto[]
}