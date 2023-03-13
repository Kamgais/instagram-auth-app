import { get } from "../config/axiosInstance";
import { UserDto } from "../types/UserDto";


export class UserService  {

    static async getUserById(id: number): Promise<UserDto>{
        try {
         const responseFromApi = await get(`http://localhost:5000/api/users/${id}`);
         const {data} = responseFromApi;
         return Promise.resolve(data)
        } catch (error: any) {
           return Promise.reject((error.response && error.response).data || error) 
        }
    }
}