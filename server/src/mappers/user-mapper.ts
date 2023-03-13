import { UserDto } from "../dtos/user-dto";
import { Post } from "../models/post-model";
import { User } from "../models/user-model";
import { PostMapper } from "./post-mapper";



export class UserMapper {


    static toDto(user: User): UserDto {
        return {
            id: user.id,
            username: user.username,
            fullName: user.fullName,
            email: user.email,
            characteristics: user.characteristics,
            telefon: user.telefon,
            sex: user.sex,
            isEmailConfirmated: user.isEmailConfirmated,
            sessions: user.sessions &&  user.sessions.map((session) =>   session.id),
            posts: user.posts.map((post: Post) => PostMapper.toDto(post))
        }
    }
    
}