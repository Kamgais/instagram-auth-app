import { useState } from 'react'
import reactLogo from './assets/react.svg'
import  styles from './App.module.scss'
import AuthForm from './components/AuthForm/AuthForm'

function App() {
  

  return (
    <div className={styles.app}>
      <AuthForm/>
    </div>
  )
}

export default App
