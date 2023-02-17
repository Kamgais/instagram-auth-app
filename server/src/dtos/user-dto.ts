import { CreateUserInput } from "../schemas/user-schema";


export type UserDto = Omit<CreateUserInput ,"password"> & {
    id?: number,
    telefon?: string | null,
    sex?: string,
    characteristics?: string,
    isEmailConfirmated?: boolean,
    sessions: number[]
}