import { Session } from "../models/session-model";
import { UserLoginInput } from "../schemas/session-schema";



export const createSession = async(userId: number) => {
    try {
      const session = await Session.create<any>({
        userId: userId
      }) ;
      return Promise.resolve(session)
    } catch (error) {
       return Promise.reject(error) 
    }
}


export const findSessionById = async(sessionId: number) => {
  try {
    const session = await Session.findByPk(sessionId);
    return Promise.resolve(session)
  } catch (error) {
    return Promise.reject(error)
  }
}