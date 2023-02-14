import React, {FunctionComponent} from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

type InputType = {
  withLabel: boolean,
  label?: string,
  name: string,
  type: string,
  placeholder: string
}

const Input: FunctionComponent<InputType> = ({withLabel,label, name, type, placeholder}) => {
  return (
    <div className='form-control'>
     { withLabel &&  <label htmlFor={name}>{label}</label> }
      <Field id={name} name={name} type={type} placeholder={placeholder}/>
      <ErrorMessage name={name}>
        {
            (errorMsg: any) => <TextError>{errorMsg}</TextError>
        }
        </ErrorMessage>
    </div>
  )
}

export default Input
