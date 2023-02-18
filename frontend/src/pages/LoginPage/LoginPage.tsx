 import { FunctionComponent } from "react";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthForm from "../../components/AuthForm/AuthForm";
import styles from './login.module.scss';
import Landing from '../../assets/landing.jpeg';
import {Navigate} from 'react-router-dom';
import { useLocalStorage } from "../../hooks/useLocalStorage";

const LoginPage: FunctionComponent = () => {
  const {getItem} = useLocalStorage();
  const session = getItem('session')

  if(session) {
   return <Navigate to='/app/home'/>
  }
    return (
       <div className={styles.loginContainer}>
        <div className={styles.topContainer}>
        <img src={Landing} alt="" width={350} className={styles.LandingImage}/>
        <AuthForm type="login"/>
        </div>
        
        
        <AuthFooter/>
        
       </div>
    )
}

export default LoginPage;