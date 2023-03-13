import { useMutation, useQueryClient } from "react-query"
import { CommentService } from "../services/CommentService"

type RequestBody = {
    data: Object,
    params: {userId: number, postId: number}
}
export const useAddComment = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (body: RequestBody) => CommentService.addComment(body),
        onMutate: () => {
            const previousData = queryClient.getQueryData(['posts'])
            queryClient.invalidateQueries(['posts'])
            return {previousData}
        },
        onError: (error:any,_, context: any) => {
            queryClient.setQueryData(['posts'], context?.previousData)
        }
    })
}