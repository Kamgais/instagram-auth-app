import React, {FunctionComponent} from 'react'
import { FormikControl } from '../../components/FormikControl';
import { Form, Formik } from 'formik';
import styles from './forgot.module.scss';
import * as Yup from 'yup';
import InstagramLogo from '../../../public/instagram.png'
import { useNavigate } from 'react-router';
import { useSendLink } from '../../hooks/useAuth';

const ForgotPassword: FunctionComponent = () => {
    const navigate = useNavigate();
    const reset = useSendLink();
    const initialValues = {
        email: ''
    }
    const validationSchema = Yup.object( {
        email: Yup.string().required('email is required').email('set a valid email')
    })
    const handleSubmit = (values: any) => {
      reset.mutate(values.email)
    }
  return (

    <div className={styles.mainContainer}>
    <div className={styles.forgotContainer}>
        <img src={InstagramLogo} alt=""  className={styles.forgotInstagramLogo}/>
        <h1 className={styles.forgotText}>Forgot your Password</h1>
        <p className={styles.forgotExplains}>Please enter the email address you'd like your password reset information send to</p>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {
                (formik: any) => (
                    <Form>
                    <FormikControl control='input' type='email' label='Enter email address' name='email' withLabel={true} placeholder='example@gmail.com'/>
                    <button type='submit' className={styles.forgotRestButton} disabled={!(formik.isValid && formik.dirty && !reset.isLoading)}>Request reset link</button>
                    <button type='button' className={styles.backToLogin} onClick={() => navigate('/login')}>Back to Login</button>
                    </Form>
                )
            }
           
        </Formik>
       
    </div>
    </div>
  )
}

export default ForgotPassword