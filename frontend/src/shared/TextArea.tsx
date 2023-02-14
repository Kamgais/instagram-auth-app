import React, {FunctionComponent} from 'react'
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

type AreaProps = {
    label: string,
    name: string,
    placeholder: string
}

const TextArea: FunctionComponent<AreaProps> = ({label, name, placeholder}) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea'  id={name} name={name} placeholder={placeholder}/>
        <ErrorMessage name={name}>
             {
                (errorMsg: any) => <TextError>{errorMsg}</TextError>
             }
        </ErrorMessage>
    </div>
  )
}

export default TextArea