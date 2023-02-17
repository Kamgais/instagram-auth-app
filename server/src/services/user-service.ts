import { User } from "../models/user-model";
import { CreateUserInput } from "../schemas/user-schema";




export const create = async(userInput: CreateUserInput): Promise<any> => {
  try {
    const user = await User.create<any>({
        username: userInput.username,
        name: userInput.name,
        email: userInput.email,
        password: userInput.password
    })

   
  
    return Promise.resolve(user)
  } catch (error: any) {
    return Promise.reject(error)
  }
}


export const findUserById = async(id: number) => {
  try {
    const user = await User.findByPk(id);
    return Promise.resolve(user)
  } catch (error) {
    return Promise.reject(error)
  }
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
    return Promise.reject({message: 'no user with this username'})
  }
}