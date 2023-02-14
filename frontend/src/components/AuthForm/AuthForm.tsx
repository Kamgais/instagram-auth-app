import React, {FunctionComponent} from 'react'
import  styles from './auth.module.scss'
import InstagramIcon from '../../assets/instagram-text.png'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { FormikControl } from '../FormikControl';




const AuthForm: FunctionComponent = () => {
    const initalValues = {
        username: '',
        password: '',
        email: '',
        fullName: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('email is required'),
        username: Yup.string().required('username is required'),
        password: Yup.string().required('password is required'),
        fullName: Yup.string().required('you must set a full name')
    })
  return (
    <div className={styles.authFormContainer}>
        <div className={styles.authFormFields}>
             <img src={InstagramIcon} alt=""  width={120}/>

             <Formik initialValues={initalValues} validationSchema={validationSchema} onSubmit={(values) => console.log(values)} >
               {
                (formik: any) => (
                    <Form>
                        <FormikControl control='input' type='email' withLabel={true} label={''}  name='email'/>
                        <FormikControl control='input' type='password' withLabel={false} label={''}  name='email'/>
                    </Form>
                )
               }
             </Formik>


        </div>
        <div className={styles.authFormForgotAccount}></div>
        <div className={styles.authFormDownloads}></div>


    </div>
  )
}

export default AuthForm