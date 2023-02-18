import React, {FunctionComponent} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage'

type Props = {
    children: JSX.Element
}


const ProtectedRoute: FunctionComponent<Props> = ({children}) => {
    const {getItem} = useLocalStorage();
    const session = getItem('session');

    if(!session) {
        return <Navigate to='/'/>
    }
  return (
    children
  )
}

export default ProtectedRoute