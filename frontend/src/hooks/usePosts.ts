import { useQuery } from "react-query"
import { PostService } from "../services/PostService"


export const usePosts = () => {

    return useQuery({
        queryKey: ['posts'],
        queryFn: () => PostService.getAll(),
        onSuccess: (data) => {

        },
        cacheTime: 300000
    })
}