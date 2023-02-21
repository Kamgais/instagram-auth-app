import { AuthService } from "../services/AuthService"
import { UserDto } from "../types/UserDto"
import { useToast } from '@chakra-ui/react'
import { useLocalStorage } from "./useLocalStorage"
import { useMutation, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"



   
    

    type LoggerType = {
        username: string,
        password: string
    }
  
   export  const useSignUp = () => {
    const toast = useToast()
    const navigate = useNavigate();
     return useMutation({
            mutationFn: (user: UserDto) => AuthService.createUserHandler(user),
            onSuccess: (data) => {
            toast({title: 'Account created', status: 'success', isClosable: true, variant: 'left-accent', position: 'top'})
            navigate('/login')   
            },
            onError: (error: any) => {
             toast({title: error.message || 'fail connect with server', status: 'error', isClosable: true, variant: 'left-accent', position: 'top'})   
            }
        })
    }



   export  const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const toast = useToast()
    const {setItem, clearItem} = useLocalStorage();
        return useMutation({
            mutationFn: (auth: LoggerType) => AuthService.verifyUser(auth.username, auth.password),
            onSuccess: (data) => {
            toast({title: 'successful logged in', status: 'success', isClosable: true, variant: 'left-accent', position: 'top', colorScheme: 'blue' })
            queryClient.setQueryData('auth', data)
            setItem('session', data); 
            navigate('/app/home');  
            },
            onError: (error: any) => {
             toast({title: error.message || 'fail connect with server' , status: 'error', isClosable: true, variant: 'left-accent', position: 'top'}) 
             clearItem('session')

            }
        })
    }



    export const useSendLink = () => {
        const toast = useToast();
        
        return useMutation({
            mutationFn: (email: string) => AuthService.resetLink(email),
            onSuccess: (data) => {
                toast({title: data.message, status: 'success', isClosable: true, variant: 'left-accent', position: 'top', colorScheme: 'blue' });
  
            },
            onError: (error: any) => {
            toast({title: error.message || 'fail connect with server' , status: 'error', isClosable: true, variant: 'left-accent', position: 'top'})
            }
        })
    }


    export const useReset = () => {
        const toast = useToast();
        const navigate = useNavigate();
        return useMutation({
            mutationFn: (values: any) => AuthService.resetPassword(values.userToken, values.password),
            onSuccess: (data) => {
            toast({title: data.message, status: 'success', isClosable: true, variant: 'left-accent', position: 'top', colorScheme: 'blue' }); 
            navigate('/login')  
            },
            onError : (error: any) => {
                toast({title: error.message || 'fail connect with server' , status: 'error', isClosable: true, variant: 'left-accent', position: 'top'})   
            }
        })
    }


    







   


