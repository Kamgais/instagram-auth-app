import { useQuery } from "react-query"
import { UserService } from "../services/UserService"

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ['user', id],
        queryFn: () => UserService.getUserById(id)
    })
}