import { get, put } from "../config/axiosInstance";
import { PostDto } from "../types/PostDto";


export class PostService {

    static async getAll(): Promise<PostDto[]> {

        try {
            const responseFromApi = await get('http://localhost:5000/api/posts')
            const {data} = responseFromApi;
            return Promise.resolve(data)
        } catch (error: any) {
          return Promise.reject((error.response && error.response).data || error)  
        }

    }

    static async updatePost(post: PostDto) {
        try {
           const responseFromApi = await put('http://localhost:5000/api/posts', undefined, post);
           const {data} = responseFromApi;
           return Promise.resolve(data)
        } catch (error :any) {
         return Promise.reject((error.response && error.response).data || error)   
        }
    }
}