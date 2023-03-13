import { Media } from "../models/media-model";
import { Post } from "../models/post-model";
import { Session } from "../models/session-model";
import { User } from "../models/user-model";
import { CreateUserInput } from "../schemas/user-schema";




export const create = async(userInput: CreateUserInput): Promise<any> => {
  try {
    const user = await User.create<any>({
        username: userInput.username,
        fullName: userInput.fullName,
        email: userInput.email,
        password: userInput.password,
        
    })

   
  
    return Promise.resolve(user)
  } catch (error: any) {
    return Promise.reject(error)
  }
}


export const findUserById = async(id: number) => {
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Post,
          include : [{
            model: Media,
            as: 'medias'
          }],
          as: 'posts'
        },
        {
          model: Session,
          as: 'sessions'
        }
      ]
    });
    return Promise.resolve(user)
  } catch (error) {
    return Promise.reject(error)
  }
}





export const existWithUsername = async(username: string) => {
  
    const user = await User.findOne({where: {username}})
    if(user) return true;
    return false;
  
}



export const existWithEmail = async(email: string) => {

    const user = await User.findOne({where: {email}})
   if(user) return true;
   return false;
  
}

export const findUserByUsername = async(username: string) => {
  try {
    const user = await User.findOne({where: {username}})
    return Promise.resolve(user)
  } catch (error) {
    return Promise.reject({message: 'no user with this username'})
  }
}


export const findUserByEmail = async(email: string) => {
  try {
    const user = await User.findOne({where: {email}})
    return Promise.resolve(user)
  } catch (error) {
    return Promise.reject({message: 'user don\'t exist'})
  }
}