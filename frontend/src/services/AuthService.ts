import { UserDto } from "../types/UserDto";
import { get, post } from "../config/axiosInstance";



export class AuthService {
  static async createUserHandler(user: UserDto) {
    try {
      const response = await post("/auth", undefined, user);
      if (response.status === 201) {
        const { data } = response;
        return Promise.resolve(data);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
