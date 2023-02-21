import { useToast } from "@chakra-ui/toast"
import { useQuery, useQueryClient } from "react-query"
import { AuthService } from "../services/AuthService"
import { useLocalStorage } from "./useLocalStorage"
import { useNavigate } from "react-router-dom"


export const useGoogleAuth = () => {
    const {setItem, clearItem} = useLocalStorage()
    const queryClient = useQueryClient();
    const toast = useToast();
    const navigate = useNavigate()
       return useQuery({
        queryKey: 'google-auth',
        queryFn: AuthService.fetchAuthenticatedGoogleUser,
        onSuccess: (data) => {
            setItem('session', data);
            queryClient.setQueryData('session', data)
            toast({title: 'successful logged in', status: 'success', isClosable: true, variant: 'left-accent', position: 'top', colorScheme: 'blue' })
            navigate('/app/home')
        },
        onError: (error: any) => {
            toast({title: error.message || 'fail connect with server' , status: 'error', isClosable: true, variant: 'left-accent', position: 'top'}) 
            clearItem('session')  
        },
        refetchOnWindowFocus: false,
        refetchOnMount: true

       }) 
}