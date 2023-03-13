import { post } from "../config/axiosInstance";



type RequestBody = {
    data: Object,
    params: {userId: number, postId: number}
}

export class CommentService {

    static async addComment(body: RequestBody) {
        try {
           const responseFromApi = await post(`http://localhost:5000/api/comments/${body.params.userId}/${body.params.postId}`,undefined, body.data);
           const {data} = responseFromApi;
           return Promise.resolve(data)
        } catch (error: any) {
         return Promise.reject((error.response && error.response).data || error)   
        }

    }

}