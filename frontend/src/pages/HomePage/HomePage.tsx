import React, {useEffect} from 'react'
import { useQuery } from 'react-query'
import { useGoogleAuth } from '../../hooks/useGoogleAuth'

const HomePage = () => {
  console.log(window.history)
    const {data, isLoading, isError} = useGoogleAuth()
  return (
    <div style={{fontSize: '100px'}}>HomePage</div>
  )
}

export default HomePage