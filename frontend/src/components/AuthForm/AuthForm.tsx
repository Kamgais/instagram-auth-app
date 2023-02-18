import React, {FunctionComponent} from 'react'
import  styles from './auth.module.scss'
import InstagramIcon from '../../assets/instagram-text.png'
import AppleIcon from '../../assets/apple.png'
import GoogleIcon from '../../assets/google.png'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { FormikControl } from '../FormikControl';
import { FaFacebookSquare  } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useLogin , useSignUp } from '../../hooks/useAuth'
import { UserDto } from '../../types/UserDto'
import Loader from '../Loader/Loader'


type Props = {
  type: string;
}



const AuthForm: FunctionComponent<Props> = ({type}) => {
  const login = useLogin();
  const signup = useSignUp();

  const navigate = useNavigate();
    const loginInitalValues = {
      username: '',
      password: '',
    }

    const createAccountInitialValues = {
      username: '',
      password: '',
      email: '',
      fullName: ''
    }

    const loginSchema = Yup.object({
        username: Yup.string().required('username is required'),
        password: Yup.string().required('password is required'),
        
    })

    const createAccountSchema =  Yup.object({
      email: Yup.string().required('email is required').email('set a correct email'),
      username: Yup.string().required('username is required').min(6).max(10),
      password: Yup.string().required('password is required'),
      fullName: Yup.string().required('you must set a full name').min(6).max(25)
  })


  const handleSubmit = (values: UserDto) => {
   if(type === 'register') {
    console.log(values)
    signup.mutate(values);
    
   } else {
    login.mutate(values);
    console.log('GOOD')
   
   }
  }
  return (
    <div className={styles.authFormContainer}>
        <div className={styles.authFormFields}>
             <img src={InstagramIcon} alt="" className={styles.instagramIcon}/>
             
            { type === 'register' && (
              <>
              <div className={styles.createAccountTexts}>
              Register to see your friends' photos and videos.
              </div>
              <button className={styles.facebookLoginButton}>
               <FaFacebookSquare/>
               Log in with Facebook
              </button>
              <div className={styles.barContainer}>
               <div className={styles.bar}></div>
               <span>OR</span>
              </div>
              </>
            ) }

             <Formik  initialValues={type === 'login'? loginInitalValues: createAccountInitialValues} validationSchema={type === 'login'?loginSchema : createAccountSchema} onSubmit={handleSubmit}  >
               {
                (formik: any) => (
                    <Form>
                        { type !== 'login' && <><FormikControl control='input' type='email' withLabel={false} label={''}  name='email' placeholder='Email'/>
                        <FormikControl control='input' type='text' withLabel={false} label={''}  name='fullName' placeholder='Full Name'/>
                        </>
                         }
                        <FormikControl control='input' type='text' withLabel={false} label={''}  name='username' placeholder='Enter your username'/>
                        <FormikControl control='input' type='password' withLabel={false} label={''}  name='password' placeholder='Enter your password'/>
                        { type === 'register' && <div className={styles.rechtLinie}>
                          <p>By registering, you agree to our Terms of Use. <span>Our Privacy Policy explains how we collect</span>, use and share your information.<span>Our Cookie Policy explains how we use</span> Our Cookie Policy explains how we use cookies and similar technologies.</p>
                        </div> }
                        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className={styles.authFormButton}>
                          {type === 'login'? 'Log In' : 'Sign Up'}
                          {
                           signup.isLoading || login.isLoading  && (
                                  <Loader/>
                        )
                          }
                        </button>

                    </Form>
                )
               }
             </Formik>
            { type === 'login' && <> <div className={styles.barContainer}>
              <div className={styles.bar}></div>
              <span>OR</span>
             </div>
              
              <p className={styles.loginWithFacebook}><FaFacebookSquare/>Log in with Facebook</p>
              <p className={styles.forgotPassword}>Forgot password?</p>
              </>
              }
        </div>
        <div className={styles.authFormsignUp}>
          {type === 'login'? <p>Don't have an account? <a onClick={() => navigate('/signup')}>Sign up</a></p> : <p>Have an account? <a onClick={() => navigate('/login')}>Log In</a></p> }
        </div>
        <div className={styles.authFormDownloads}>
          <p>Get the app.</p>
          <div className={styles.downloadIcons}>
               <img src={AppleIcon} alt="download with apple store" width={100} />
               <img src={GoogleIcon} alt="download with google play" width={100} />
          </div>
        </div>


    </div>
  )
}

export default AuthForm