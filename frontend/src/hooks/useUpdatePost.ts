import { useMutation, useQueryClient } from "react-query"
import { PostService } from "../services/PostService"
import { PostDto } from "../types/PostDto"

export const useUpdatePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (post: PostDto) => PostService.updatePost(post),
        onMutate: (data) => {
          //  queryClient.cancelQueries(['posts'])
          const previousData =  queryClient.getQueryData(['posts'])
            queryClient.setQueryData(['posts'], (posts: any) => {
               return posts.map((p:any) => p.id === data.id ? data: p)
            });
            return {previousData}
        },
        onError : (error: any, _, context: any) => {
            queryClient.setQueryData(['posts'], context.previousData)
        }
        
    })
}