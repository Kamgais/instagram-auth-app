import { UserDto } from "../types/UserDto";
import { get, post, put } from "../config/axiosInstance";
import { SessionDto } from "../types/SessionDto";

type ErrorType = {
  message: string
}

export class AuthService {
  static async createUserHandler(user: UserDto): Promise<UserDto| ErrorType> {
    try {
      const responseFromApi = await post("http://localhost:5000/api/auth", undefined, user);
      const { data } = responseFromApi;
        return Promise.resolve<UserDto>(data);
       
    } catch (error: any) {
      return Promise.reject<ErrorType>((error.response && error.response).data || error);
    }
  }


  static async verifyUser(username: string, password: string): Promise<SessionDto| ErrorType> {
    try {
      const responseFromApi = await post("http://localhost:5000/api/session", undefined, {username, password});
     const {data} = responseFromApi;
        return Promise.resolve<SessionDto>(data);
      
    } catch (error: any) {
      return Promise.reject<ErrorType>((error.response && error.response).data || error)
    }

  }



  static async getUserById(id: number): Promise<UserDto|ErrorType> {
    try {
      const responseFromApi = await get(`/user/${id}`) ;
      const {data} = responseFromApi;
        return Promise.resolve<UserDto>(data);
      
    } catch (error: any) {
     return Promise.reject<ErrorType>((error.response && error.response).data || error);
    }
  }


  static async resetLink(email: string): Promise<any> {
      try {
        const responseFromApi = await post('http://localhost:5000/api/auth/forgot-password', undefined, {email})
        const {data} = responseFromApi;
        return Promise.resolve(data)
      } catch (error: any) {
        return Promise.reject((error.response && error.response).data || error)
      }
  }


  static async resetPassword(userToken: string, password: string): Promise<any> {
    try {
      const responseFromApi = await put(`http://localhost:5000/api/auth/reset-password`, {userToken: userToken}, {password: password})
      const {data} = responseFromApi;
      return Promise.resolve(data);
    } catch (error: any) {
      return Promise.reject((error.response && error.response).data || error)
    }
  }


  static async fetchAuthenticatedGoogleUser() {
    try {
      const responseFromApi = await get(`http://localhost:5000/api/auth/login/success`)
      const {data} = responseFromApi
      return Promise.resolve(data)
    } catch (error: any) {
      return Promise.reject((error.response && error.response).data || error)
    }
  }
}
