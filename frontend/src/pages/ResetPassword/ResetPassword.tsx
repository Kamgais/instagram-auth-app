import React from 'react'
import { useParams } from 'react-router';
import { useReset } from '../../hooks/useAuth';
import styles from './reset.module.scss';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormikControl } from '../../components/FormikControl';
import InstagramLogo from '../../../public/instagram.png'

const ResetPassword = () => {
    const {token} = useParams()
   const reset = useReset();
    const initialValues = {
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object({
        password: Yup.string().required('please enter a password ').min(6),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'passwords must match').required('please confirm your password').min(6)

    })
    const handleSubmit = (values: any) => {
      reset.mutate({userToken: token, password: values.password})
    }
  return (

    <div className={styles.mainContainer}>
    <div className={styles.resetContainer}>
        <img src={InstagramLogo} alt=""  className={styles.resetInstagramLogo}/>
        <h1 className={styles.resetText}>Reset your Password</h1>
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {
                (formik: any) => (
                    <Form>
                    <FormikControl control='input' type='password' label='New Password' name='password' withLabel={true} placeholder=' new password'/>
                    <FormikControl control='input' type='password' label='Confirm New Password' name='confirmPassword' withLabel={true} placeholder='new password'/>
                    <button type='submit' className={styles.resetRestButton} disabled={!(formik.isValid && formik.dirty && !reset.isLoading)}>Change Password</button>
                    </Form>
                )
            }
           
        </Formik>
       
    </div>
    </div>
  )
}

export default ResetPassword