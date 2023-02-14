import { FunctionComponent } from "react"
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import AuthForm from "../../components/AuthForm/AuthForm";
import styles from './register.module.scss';


const RegisterPage: FunctionComponent = () => {


    return (
        <div className={styles.signUpContainer}>
            <AuthForm type="register"/>
            <AuthFooter/>
        </div>
    )
}

export default RegisterPage;